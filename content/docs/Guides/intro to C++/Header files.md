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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCIKY56%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC3gmUnEipTl3wxySBanLBwVdeFdaWGMyltqf5D1hK19AIhAJQ%2Fq6H0WGxjcyrEP89qQnvh055QP24aR2O85%2FI0yi%2F6Kv8DCCMQABoMNjM3NDIzMTgzODA1Igy7qd0I5v2MiA0JlXQq3ANNQvUjzj97g3iDX1kw0yEAQ2NVu5uEBRu4KHmCkR0Qb%2FJkaXzwi69GhB32os7VbCoiabJ8aIHwmIbwc%2FeTk0Gh672aXtqJl6yCAqRqOogeM1XmuaLxUepXCGv7BsP%2FwSbSZxRJN1v3xMPTRrjBxoA9AMrAMT7WZBXXKazF6l3%2FY888kZDs26mTVIbbXACOM%2BR%2BlChjFlWEvqwxVzseo4KpWSSnV6%2F6yQ5MXaSEtdMw1xwTe50r2paPMjUVGw8%2BLbZqtNdZPdcJDTnABwuqrcXibq%2BtO0Kk%2BMmfQBM86m9W1ohLvfI%2F93fLaRZWn%2Fpbw3O77xOC597EEjHSK%2BHT27fr7plpRahyqMXubPqq%2FRsCXEq6q%2F4dHcAinynRvsQP5nrUqy9Igehun0PujvPoOCw8I96JGXAGCwG11TcuqzY23xapGaGN%2B9A8TGWiJz1xzynfGoVuFDwI%2FIlNdDCx2ayNe5UXL6f8Gx5b9oYao7JqoxftxbD0cKaiWdBGG1QdKAiEblUieueOuoWZVwjVAa2G%2Bw8YZjR4G%2FIQj%2F8ByE1gOUeOKDMYV8Lnv1WDkwbNmwvyRvOexvbu8q41%2FP0ULercBujcsYqumxH1xt%2BRBsgr2bk8XFjW7Kvtav80mDCSzdHDBjqkAYjVNPRqmGJngdgnU3DR3qCOFilccYy7nuU4hoFeUkYK9vNAiZHEultHoAkecOBW%2F9yuCQtua%2F9PHiNsbFRQVgP9jQaJ4lCee242Ng%2FCs08C6JD9cgxlkXxCETDeCreOLIdOd4jbVHEaoubHK2FOX6YWqY08ddOpvVSlR%2FD%2B4xwhA%2B6asFa5CoKpDaO2ffxwMa%2BIYy0Ye%2FoW%2FUwFo%2B1tSVzxF2cN&X-Amz-Signature=8aaed547466acd2ee48a6aa3e74768a00cb2e00e013d28054af219db0862d091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
