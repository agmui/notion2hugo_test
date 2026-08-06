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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLGWYDH%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDSA%2BsXWYxq2DWSAuDaG70TQsw1FBp2HIetBXGQHpjG2wIhAM8vWVaOlFExy3IbexHf5iJUyKj4PmzY5X%2Bs2BlsDAWLKv8DCDMQABoMNjM3NDIzMTgzODA1Igx8LkMqFEMu0B5E9IYq3AMjn5T%2BS4p25L3zPHcT11fuvZyLdf3DEddul0Z00V7%2Bf4Odh87XNqJoVr5TajetTnsC2lLlOCYY0ckOunOTQ3ec0eY%2Fr6%2FdlcGfxhyzNCx5hm8KpjBJNW1pp8Fw9OIGb1tcGKG4iOOfWOjgXADb2tTZ5oSP2GJQZutdY%2F6fEy4Vsu%2FqHeFxft5WwibSrH5zkmsFo8CLkpCa6V9Ilt3T7ihTCEGi3EeUA0iG69rD9KfuF3TIurTy1jAvEvvI8095ERUmemc6ii4njTFaxmABn2U%2B9cQlowqc8rblKPgEtpiXHDuPzRviqKAF%2BYqUzxKdmWx247dk2jMdPWuVjTRIs%2Bw8leof1cVsgQfjFjJjiT26hzlJab%2B4qvwRZtkZo0O5aJqlnNBJmRz7Uf7JV%2Bt2S44KhYCmJOqBSIxl5sPd4oyc1wRc6ZYJOyf8pOGKvKqVld8iQ9YYXR%2FvK%2FbXXwtoT0FBJfm2yKlgtrIQhzoWjf%2FSJlcsx5M0WI0kxXBINU7YKAhJa731rSWrT9bQvHTxyP5YfYJAO5oLqMx%2BAzUU3qOCj%2BbYfegKdOmnMJdzMTTAliOSYieP%2FnMkHs%2BGuZhy%2BygvfUGfN18jjGtiIpk1MKC8GazAZxix2ccOhhTeaTCN18%2FTBjqkAYs7L3MDesYH8KNz%2FqYIEAh8Gol6p4rIR14VLQFMS0Gsaf9jIOFKqgLw71QxxNNFmoZGH1%2FNkogB16Y1%2F7XhonqEJ%2BnVrPosbwcywUVCTvMca7tiAxVgM%2F4iYzFww5pDIL6VkRpYjODCtjaGUWLNmCQ53M%2FeK%2FvoPQKMJ3Mde11BevEDJH1amc3Y3e%2Bgj%2F7URRvy%2BYBszNAtOdQtNH4pRdMgE8Rk&X-Amz-Signature=4f16ddf0ed4febaa36e18e47ec4c25d3892c82c934c7efdd7c57ca8fe6cce760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
