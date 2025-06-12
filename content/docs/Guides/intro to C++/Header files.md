---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYRKLJD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCzI7Ne%2FmnTI9Vc7h%2B1lRiXnAResEmJqMkHXa1rQP6%2FegIhAL0xv7OoQ1mi2GGT1fCPM47cOnvUvbdJ8dAZQfTmk9UGKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTpLwlXTriGk9BklEq3APDA%2BdTj33K30o6ZcefNaL4ZhgjS4REugOFiRYLXUKsUW%2FiXEMnVFAb7CotlY4x0t8ejD446yDG1xKIf5qrCZk7UsY9hQ0AfSvEavT9zlQxZp9pjhVPJILojM3sKEwEaDT1otMKva34klPZrSLnp7R1SdgHIubwGY6cMNSwDxhtVyX7MFXXu1giWtf1q01m1mtINqPQaema1Lx0%2FQkwarCHg1zb7WtGAGQjg17OSy8Du6Y335XLLUXaghCTekLX1AujHZ5PSS4Uv6IbC%2BQY%2B0sVd3PfyzC6RgfTHlHXbsFjKEo4cLKTfkv3pyqEeIlODwmSf9HijhkPIK%2B%2BO7TDSWhLOKv%2BDjss0ZBu%2B1n03SE1oxLJDpTEShP5mtle9gm79ATL1paLk4jT7fvp5uQiEhMF60YIAF0qVhY2XXz3jHovyK9X5QIYTM3BlA2e0Z4J9tmFr8zk1olT9q8t92xiuXWRnQZiEE%2F0LWFTATMOC89A5RHRyP%2FVo%2FAJdQ63A1vlemjlm7hbN7pyegDgzoQil05AchG9sO8JaiCTbUojbL1j%2F76MM5bmk%2BvPb84cQvmDHT8BPkrE6%2FnrpmZnTI8QE9ol2RFf9Tr8SxyA6m48zQG15FzQvPrMJ7IXapLHkjC1iKrCBjqkAVuUf0B2zKiJTyTbfZpNMgHm8QifRnj9h8H6jIgHT%2FogoerORecBms6uQ7fG7bS%2F3h2b7zQW1c5S3HdKNT0oEkgxJ0MasmWF5xXRBeoXQCwP88%2FI8jGSXEaD9kN0uarffsmMasWuXtlFI0VpQINEW1fqYm5qF%2BB8OvLa632by0FS0YQWpC9GbYCgqf4FpBtlCkfBCtg%2BvUWZkUJEFsCcRVjTNNTz&X-Amz-Signature=d0b53645895d76637e397362494d4f44199f3d90282b893ed6ab23b7e9e5e391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
