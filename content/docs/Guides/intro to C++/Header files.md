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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCFVIP6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDuRtYAU1MAJpM4HdpjPGf697WtjSzLbsS1vfiMsqus6QIhAO8cS%2BzmpGSOIn0PwdmEmwYr4eZTN%2FeRmLYEzSZzwyL2KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbFKrJURi0nrOn2WAq3APZI3XPIO1PqV3gJVpAkGxhdLT75JC6t8G%2B4LyPovMRmENy%2FyU%2F4F%2BnGqPs%2Bp1IFf27MedFsbaDHx6cZUVmE5sar6qwybY1r%2FSEKg6dCLrV42GJEWj2HCr7ytSPQNncdf3GywuPdBkBHpkZJMtzvz5L1OkxuRzNZ9A2EU4irzDq8SvM5Hclmi77h8ot%2BSxnXkF%2BW0ILr6txcOZirj%2B%2BOgB60%2B%2BAMDgaEAnMjmYzqO6nYF8VtsBVgF4rzVxg7eP87trxF9kK%2B7SV%2Fu4bm%2F43wDdal%2B3%2Fl9GClj80jrFvrbrJjxp9dHzg0E3UdlameUSCZZlwS%2F38W5R4JyzLDcVwBKBII6%2FNM1cB8Hqr8oRIDWlIXi3bPJhuFaX48FNGGmO8hfuR1dvyCpiSStIwuvb2sfUfeE%2FqbsmlBtXR6EzKIHnEPcjemmeTq4a3TE659MPBnBmkrYQi2I3GcfT%2ByNy03fgsjRaMKd2TH7xcLKcIUxR7efgr8AVf%2FneM8lmbpvq27EKgXjmKWV3BCF40WvaP5161MeECXw1qq9Wblktz88s%2FGbtrRxhpqdUY3rj2aqRzRHybQiwN4zP0ieGJFkMVb7hN%2B6EabKgsZB%2Fq6Fv2RpWd5OVJsW%2FBnIENOsZzrTCik7rBBjqkAaDOzR7NNjP2D4aXl70fGzkUs7FKv8lw9xmY8raTE3w5acOm0Oe023CArDB%2B0RrygkMrKAHutifdBvQN4K%2F0mtCXTBhcxUDrlZDY%2BlvlK5pOdJX81GeGYzERxJl5%2BEeNbAvzQ1LBkVSZHYLYamJl87qxQ7%2FpDK9vz1KN19AshosaydTDea00%2FDJE1oWU8S8VkpmZ8GS62nmCRd3PSrQub8BqfFLm&X-Amz-Signature=f5708b60e613dc970d71c5d129a22b14bc3c796399795ba17ca125287b913fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
