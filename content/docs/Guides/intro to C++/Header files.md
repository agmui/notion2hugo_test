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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL4W5PFK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQD3bfpsvHUgd7%2BYuI%2BBnzoxmQ6%2BLSgSmrRg1F63h3N7dgIhAJ7gqceTqOpY1v45CZYU1Eim5oq%2FtKwnauvkVLTZNG5ZKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDqn42lgZ6zn1cf94q3APtvyeU%2BKLkvcvf%2FGhTYenY7rAs6bGMQpp0xDZ7QeCTGS3YSU08Nz14OnFME9gOlziVKbTP%2FoCEfj3LfB4BZB4gFM%2BG8e%2BrunSxNAIHZZQP3t0BzQybSGBcBOTrzBNd4fAIegnFesf8VHbWFMM9U3DFSg58jozDHBKYZc8a3WlpMpcbzL8%2BX0TkTOxRpXLSC%2Bz6l%2B7WxnXLK2EaOTy%2FUWV%2BWUCUAiUfUksj2Xoq%2BMVMWROww9FxbYITBtkJVGQaPEnAqhKy03LD4tNDV91k%2Fp5YPF2q5dRNmxrvZqau%2FLjTw3zGaCTjpExSqYWIIlTvI3%2FtqQpAt8%2Bpl8gvj%2Br8i%2B83PJXk3ArB3fcCajcCtZWULVR0r%2FrO%2Fzie6BqVH%2BSWfnVD71rzyKNnTbbP5ySdm6zrspPdLWDqTmGNFhgtZvjce2vrnTiG5GDMt9bsZy7lK0hY4iOFpx0evbOEJYPzwPKPYmBR7hvrlJHb6AZ7FYByhrZipmZG47cE6nYI4DUh6SV1cUue3aIQ7iOmz6tN6RUBhkkGW4rSUoyivjfRF4Rscn0P7cfWoounyH5gRCK55bM0XEXYluo2FaS4yJk2KQk2frUk6k8r2t%2BpMD7I8s0F9M%2BY6fGlb9XPv92l0TDfkoa%2BBjqkAWnkRp5XlwWUnd%2F8tuGllLEdCN%2FOWlqN9SGYK%2BV9Kv1O%2Bxj9X017xnLodwv2%2Bmal3LCjszza8h7a90QDTO1CLxWZu%2BT6WwhdXKigegcFLi%2BOVxLfTDyvwM4QXhmCoJ4gryA59Cn8ZqCAL%2BO3I1ScG680JbW076%2BZhkFe86LHVz9ijFZavX2%2FtQQlWkWW%2FTGoHUHDXjT9uIvA%2B02jjhEGZMPmPwUM&X-Amz-Signature=39bd8b31d40c7f277a1b1dc2ad0c492efdc068c32dbee77056160f99d361db72&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
