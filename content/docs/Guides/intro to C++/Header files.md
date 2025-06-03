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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOTRDE6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCscnHCkag8jl1eFSlXm%2BE5kpvENXArwTnzUYwKBjTr0AIhAMOJdU%2BRAhwf46sml0r9Yxph2%2FibSkr3PbvHull%2F80M5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgylBab5z8rccFzAHUIq3AOsv3N0hBuISpDlOWvCXJBc31h82mNXJc9%2Bl4aFILgB9rsai2n64DU5ePPY0jYON8ss7K2Nx7qJR%2B5KmSzlMFki4l25JgspFdnbGM5VQr%2F7zyuC%2F3jzdjxg7dSdGY86pm7682QltQVkAXvRWNtnVo3z2pqi%2F37KmY6P2Dc2VUZ%2FBUn3GNByYFbdi1JMaIJlD%2FtFo4aiVPP2zq5H8gRkkXdGnj2TcymedcsNIQY6CqlSEYkIG%2Fpjg6Lh9U3j%2FY4kaWLvuPJtXsni1NB8mpcHgP5K8n%2BXqlXJvZSqwdY8pwoncTmlVTLl9EuKs9ORkQey4fjoX4gLDASNpgF%2BvvMYIrBVk94y3sqq9TSSuT6lcYtNvLfRrwVAG9faJHYENm006ERrnwcSxZgU%2FK4XEcFcOvFhNm9kGFIoYugCdZHFClm%2BnerZ6Grl6bAk%2BNIl8y%2Fr42EX6VZkKVK2O2U2x5FwZfAKS%2F1U26btztzd%2Bd7o9wzt%2BDzLFhODiYIEVyfY9rQy6X9HxYAPlDx9oSfDtcOPGofGasaMKn9Svw5l9CvYuxX9QqaA%2Bf0HrRu0Qratw8L6D4%2Bt0D9vSaonROTb79nGfrfsqIS%2FzVJA4jtj%2F4%2B7a8%2F4d0hblxFv4u2ifqLy%2FzCg5%2FvBBjqkAcXWwuByR3kbQ9nvDQX1UIJJoAVIGWn0mbQG%2BXblvOLYwY9xTBuA%2Bk4tcXd0AxjEOmZaAcwYHlpo0EHspL9srDUtw6HuIzYpBPMESl3ZrMut8zMp88ysZRqQNmY5GA0%2BEmDq83EHRPiA5Xf7pdIt3WCrto%2FT4gUzO3wf0rX6KSGZ6NeqeXcDunoKWN0FH88Zz%2FtOpWAdh7MzB2bPCebzhLLUqcjm&X-Amz-Signature=8d68533d0637cfd2c016951c14ef675e1b6fc31c0351f1913ba44410f0718007&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
