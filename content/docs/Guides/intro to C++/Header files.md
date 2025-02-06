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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG65DEQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCEmvuA23tNKD80BMNtvyH5fBe6PMqRzJOV1dm6cX1JSgIgEyhXpvf5NF6u3kL%2FdsRCWNBxVN0wVdTB2bYq0Co43Ykq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDF87vaiievGIM8j9zSrcA7V1r5o3YxjjPndY5TxRkfWtYtg0gZcldmGKtEGh%2Bm4nJS11FMUgfInI0kPaeZ4NG8jNXJ51ocohuu7kqXnoK3qaGEYulxynYccikiBnlokXy3KKXTsPA8Lbshrntaqz4subsa1YyN92Yz0Zh8ORmgi2%2BB%2Fjya6JRiDy7FXJLpLjcrA66vt2KS%2F9XWd%2Foq0dK2pS2iziYEbrPcSHDMBur2GsRQjR%2F9Q0swBST7rw6t3uFa6f%2FBtiRsCC3go0IsAMxG2mDjV5rs%2BMQklFbhkHCxgZDGafKSBPppP5cMRnTlnuBnXx6wssM1bNeHpqJZ1GBalg2r3aryR%2BTzo75ud8ea2cSb4D0EyuqQR2yMh%2BS4GEgGtG%2FY5rivpjqDywVOaR8RRwgX8yuO3%2FIIvD0HQDjW%2FXXri1W32r9z0Yzn6UXLhR74gEDnYlvvXSUzWn9xwm6BaF6qgKn00A%2B%2BRcTNCzjVZmFMho%2FKubYXiX5o9X977qtarv6xjLGowplW9PWF5i%2FLoG%2B10VTVpUCNf52bEQA2MhAuK%2FPSM9gJUjHk9uVRU7jukgykq%2BrtwI2R2E4610G5qv5YhyV%2FeEkHRjemx6%2Bgn49jfvivC8%2FhfLKE1dTpwDzS6Ni22qIUqBcNKiMJLtkb0GOqUBckVw8XE%2FP3N3lvPjN2RHctwFsbzhb83cMAvvzfIviLSQOzR7HuTG86vISCxKhmYko0VU%2BbTE33tANBinzmZ70Hyydj2iSGAW9IYG4i0ypuCO5uCtnXhpq5hKVpi8TxHhNWc8%2B%2BShLozJSJs4Rn%2FgHexPfnhiu%2FpAy6njfRQbKdXT6lvrWn%2Fwp7C4FJYYVcJLEemYQbkzYj5YNvlLPNVmfWWyrf6n&X-Amz-Signature=36aadbb893629c20ed91bb6ef8cb4a48c11bd200994049a72a07d39aa5303f61&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
