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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3EK45Q6%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICGn4rMFStWkVyPp6ChI6U0kf%2FrY8wuHqXf68gT%2FhIzaAiAh1COIdqTFYCJKMStEPw%2BkLNnJiduK8lnarAYuKvOJ1Cr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMYG2dv7MbbbZi47FoKtwD3DQFXLTRn5%2BOc4RDwomdbP25yVDfFBelnAEhW5yuYzw%2Bmo7WrzOcHpo0qhuMHU3qD8DMkzdhmlFv9yuUowmFSGwru24PZkZsfTZr5ty9Huec%2Bay1H%2FAicXZk93gr%2BX%2BnPL92J0DZJxdIL5fuTg6408PQ66K%2F8qNxnJkDZUPkTLaLvmYdv8wQBgGQhm0q1Sm8QKXk93KLarudiGr3Vqb%2B2nM6HrcdHwBL7uJrgKYwrtrknpH9efGQn1iegB64rFxrZ3h7hX80DiDpoc3t54F9H3XvPGr3t%2BJOjHFrR%2FVBWMtHfsFmt1jEynBPgXzDVbLv9b4QLLa34S7rWyVBihme1T6rJvMDvU3Sdy4oQl%2BOISdpsybx1oUW1jpZKYpCkcUBvdfE3UUdP3KmGQITZD%2Be7uWwr7Q87SMpf8Rw7fDXcTnSaRDh%2FWeKPpq5Bir2Bqe2SGx5nVXBiCk8r9TxKVeMoOCdYcsdXjQhd%2F3x41PDKJibmaue%2BDuFhNAPx4MXGuImUmK67%2Bcz9Ls1EeN9KhT6AndEZ9Oz1TgySEWKbc9i04pxDdeOn04BAshM0CDT7jne1oPiVBYkvyE5rwVKZZXxVSSXj8M7jv1zUD9OaIIOhqmDN3uUj3XgXvphl%2Bowx%2B%2FVywY6pgHMzsB5HNl0KT2dUDfD85u%2BWkMtbUtuWqXPkN9hhvxu0dGhx3jDA4wrfApKXxgWL0XSzJpcDfVMHLk57IZ2GOs2FmsKX8QllhLHV43hDq22YS6z2OKfaytKica9XRnxl91MtxjLgCSWzfTDqo8kgLHqT1PTla2mi3f22YvnqX4JtcSoiKm84PIeUpYWfV2qgyEdSFllmZOvVPDdlp2cL4ouK79Azyvv&X-Amz-Signature=944a9502e74cf5d0cbe842e1cefcf3ae27da9ef58c7494ad21bef4885fb9d7a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
