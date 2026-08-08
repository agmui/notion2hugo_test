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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAHE3XEC%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuzmCdTYzFo3rMt6sIMze%2Bld%2FN35IpiPB4AA5yuvjoUAiAfxsCMuZ%2FNCT14jx4Za%2BTF75c40Zqz%2BGLaXTLz%2BUvpBir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMY1cAa5%2BGnNy9iWA9KtwDKkGVzTjP8KE3zj%2BlrCvfZ4Rnjv0I4iLT8PBRWykXQ4lTBUP5qjsAp%2FQrm%2Bqa91KPjQE2UYCfElGrPw4%2FptB7rINlVOmznQLCMjXbFWx5jvni39YBnOnbjvE%2BCU3O5uIBf1NAXhWcmixpxRLd%2Fg6AlLFtwp%2BazGgWSfsn8rSTNUJWOyEGAdCLQ%2BGqX%2Bp9DcMjeh1ILdHL%2B%2BlSL13qvw7mnzYAAgd5HeeZWwASZkVwTqMDoS9LdX0rrv9JzBsNkXtBnyb8ktjqhfSUppMRdi1%2BlkeQ2yAo18YWCZr00lq1e8iNZ4e%2BQzN%2FczCYgEuNK3pIixIYUAB7cLPPqcUSrowJ%2FMuVao5B8Z0uiZnWHwFUEA82EoZ6Hs0j3kavZ3tJkNC9%2FnzGe%2FIxoAVocMBANzM%2FBSzLk%2FJ0Qlqh5bXxFBA6XF%2Fgts%2FcvSJocCwj0e6lCzO0t5E%2B9qZx7wzKjg5mL3ZEuCZ5SIV4XjrcUHIrEvJ9Pwp0uuOpajAZuSywtbcBBvonxXEBVbknS43x4iUoes65PkXTm%2FCoKKuCSW0qf6WaBRAiwGLJrgBsdauHWgOxHyDo2m9pT1vu1R317aJcI1zUFsq06MmssA2zAUuUDOVUkvVRE6gLd8Jp4N5YvSow%2Bu7Z0wY6pgF4CYzVPluPSBYrKZcGvf2Vystj1HSyVZA86OACatXMzTVCC8qdc5dZIdyZzg%2BaO6UxECnIZ1R7JI8DKrDfvEdILby4LWK0zz34VOxeFq774aNmG0wo4PUMjxJ2pVDrmgALVKZXpOexik0M6CiFfkA7SBuVeRfVsHeXQ567min4BgOZxbqNWx2GptYJDLc0VetT7WvF2Z6AFUVEYaVNCZuunOOJLRu3&X-Amz-Signature=ae226d0b33a4c40f00cc0b1500e81421c6b21da8c3e12aa4b8278c4e83bbccc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
