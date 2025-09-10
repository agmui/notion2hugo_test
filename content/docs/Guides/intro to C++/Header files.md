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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR5FDBVR%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAeKjFPMrErvLsaJIfRCiWENr692%2B33Snl%2BpoDFhxhZNAiEA8zbiPJQhraXtt1yCsqHRIf%2BE9G5jgTiq2dBPfBzv0mUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0LbR6Q1ShpQSALQCrcA%2FW3EwoBzYJM%2BvrY2Ncc4Sb1LuJn2KWU4rf6wmhK7M%2FzimhnHafp2EVzJMRn4kRFou%2F8%2BxdLeAfquiApaWWtBv5UC7FQork65yWzgpSqHx2gZxMoJCV%2F7UPaTANLUaGEVgXxqi%2FL1ppsne2ZbXAc8ap2pPH9IivUfQHCFtANnOx2Xwt1D9PK5ldQv3gZmqbA9cE9Nx7MtBO%2BfFMCd99khuTwZBaKkskoMTyWCea%2Fk7jjmNr9fXRkcRjwxXEPxYWrZ3Ho3Ev7JCYtRn3ayavtr65tvpYOWQns2v9uJeUIrs8rDDhmKh0KFFRfnQNGpZVlF2dldP15k7Wgt4kyWWxTxFwPD5sI8M%2FO5WTYY6Urj%2FIkfN7NOLvRY%2FOLJOFLHIcIDrv%2FMNH378LmnQn0GgKbcwhOKM0yD0jCjvis3kY5h7F3tlm5tKYNQ8qaHQwrzBOyC993gvh7uu8zEeAyWISBvTVDe1bSUa0dKgsE1RWsAJboBV19GctlcpyfTyRvLSqO9FnnbOJUHl0Wj5ekfnGuCj7tLJKZPyMuib0%2BDyDSm07pPypUgS0izaX93klR6AfCFJNkmAPbnJR%2FrafRpvRo%2F43VknEJUBWYcTvWCFP2Xl16Hq0YD%2Blki4AQ4VtcMN2Lg8YGOqUBYchAAPjFMnRYyE3tDXu9%2FmdGIbwa4rAAS8ReiPZLF0Jx0oIHFzF3GnCvz67kD%2Bgf%2BAR7Xi7o8aY31dXZyaaiE4tT7be6rX6g9%2FFncNbBC0wSlSQCIrKKTaTLwthKfzYYMp%2FQW03arvKSY91DSHUvnsdrLGtG8PbhPsAopHTQWxmofmVQBwdb5oEcaM1AC8aSOrQEaxe%2B%2Fj7kGW0EZvtS%2FUp3hP4u&X-Amz-Signature=0946cf786ebb2696ef89ca5216551fcba542d7cf61b0bfebe4c5c715d9200c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
