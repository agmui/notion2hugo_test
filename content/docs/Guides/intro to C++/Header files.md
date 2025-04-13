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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TNKO3CC%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDKgimyZcSGd7IZ4m4ZKwYJY2EvYA2yXMjHWshttzYOjAiEA%2BQV0E4q%2FJUqwb33cyxK0SNe91AyJKCJTn3i2JqjQAOwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKL34CeTOjpN4NcHfSrcA%2FDNoxB7H%2BhP6BRn7hcspUt4AoESp9ZwjsS9hfwpD2yqWP%2F74vpcsXY2yK8dnt5G8tntzG6Tt2h03pfwPBJ8wrcAqY4PAUTWFFLQX8AiS8gFauZ%2BOVOpPcwrAG2ctTt6or6dZ4aHrjoSCAtNFuqusditGYPoTg6iYk7R1TXQRAG6nS9n6HCVcGyFV619EClyjdhJkEoDKn%2Bg3ENb1Ajt%2FfbYf1Y90hSG1ev4as5DrSuB7gAo4TJdh1ki6GaE8LlioaH7c008g%2Bcrgt7HjqIrefaMRuORLme9fYphaUJ6BlTxeqa8iyuqy5NFKbVno6Yja7Yt%2B4JegakhqjJJ9h3lw%2FiZgfcz8MFQRKdORXS2lhOYHKsADgN0V1aEFqCJLJkxVE4kxRvQ0kt%2FVGYXsxQXDDT7bvAKhsdLVjY86Tuz1NqLc1lvGQWgRznnMvHcJWmBzzhwSZKDNqvq4WThN%2F0tXGP%2FbG3b%2FhkNfswzkl5Ng39buq5igRBJg21t0k%2BL2nT1o8RXzrJUqY0THeEhyYUgfrB2ZlPXA5TK2ZqJi7ompI7CmXPOQywJ3dr7teSmmmxbS0oMQD%2B2hWxwQsGjEeFTgPnFsGl0u%2BNaclwekOOejvd0g%2F89e1rATPkBIIGhMIOw8L8GOqUBP1jx0rBAEaHfdLwAvRsC5jCZTRdKr1rNoajEneOUH8LEMnSRO7OnVpUtMYqbkPSD6cWifsfhmPxBrvdG9kVDLroaI%2F9MJOOutcBjDf440qA9uA%2BO%2B6RhXA7SJayGk69AjbZ4lxVMISIE2%2BOygceQT6XmRmVLNYStWTijoBcWFI9X8Mf5Kc7MZd5eHl5LtuHiUQmSC8qBqdsW9tb2K%2Bcojqw58xHm&X-Amz-Signature=9b61ea3ef763f52eda4fbc020d3d609c4ebaedf6b4fe15188c1feaa508b530ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
