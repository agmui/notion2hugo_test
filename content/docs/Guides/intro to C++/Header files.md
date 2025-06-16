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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE7RHPN2%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIEsoy8rYEMVgkxjpyBPpJkju5FXq04AALc%2FjmUCLfHvLAiEA47PlCVRRa6vDkfaW3uQnCqI9cTC5VEYRIyIIaIvhyg4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDEudDH3w2B%2FaLJmDKyrcAzVtP%2FTUh6tUwQt%2BAsXSkq03TRhCoIEK0C6%2Fjq4QeBPwfRyVEUQfql273%2BhytXVTMNECkD7GQQF%2FDCYOLjg%2BoPVpArLEif7dJEyNxVMHIP%2FQOY7Uu%2Fr16e1iGTQJGG%2BnReiyGAAtpHP08L8kUr3f4TzB1JQE2JSHO%2FVSmOCLV69fUzGO7Ic9VD0FURXvHLe8XkO0aj7k7SdHqYZB00ul%2BNWfTJwodOeuTghbXJflhX8xcLBe2%2BteAUNI9VPcxROflGMDFOPdal7waMweLBghVKUhNv3tLJj4iSqaV0e%2F4J18GO%2FwActdJHKviRqTvU8JxkmOxX19owjH9JTPh9pHJfOIVV%2BqF%2BWarQQEpdkFh1B%2B9ojfuHBjdSwM5TLyaTHyuBJUgaXk8ic0Ui8jwGA5JkzS2uGQu1%2FLlkRhdF7ucTLjB5bdyfLHeanYTcHnWKRe2cBI0YShVDdTL9jNP3qAJM8xxLQgQaqH%2BjolSq2KLGEmWt6hUs%2F6a7YWh3VsZlI4kXOhf2n1Lm18fXXU8OyUKFbrJs1UDCOqz0Ioh7GiUO8%2B%2BTFfZArTEB21N3QLiLQP6jwhgtqeUuXoqcILFyKZFLahVOv%2Fcspm5ZWbbSDoqHcsmIovaI7gmxH2LMNtMKnkv8IGOqUBt73SZJgiJILIo69rMPpggRQYVqc2CQT7p4R%2FDK5YP44QjNq3ORxQA8Yl5erQ4WUiSej9EEZaqsVbiqtvJQAWaPS6O7ue%2BbSC9laF8xCko9V6rquYi6cm4uGV8W59WX95i4A5aCb%2B2ca2xKjvRFKU58yyac6YnL%2F3Bz2qlVbGF1v1JTbN7eTuTaydZ9C3aWZwCSzqLEii8y%2FmJWhZAo%2BhX0kYOb6w&X-Amz-Signature=bb70e0f78b1cee1b0909a98cd14072516c0684f78466ad99b01c7049ccd1472b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
