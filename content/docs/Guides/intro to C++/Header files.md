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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPCW3UAG%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOd6gVn5ift9rZln48A%2FkTHjQEw6d7UibKf%2BqtjWLu7AiEA7Pt67xOsMZLfJZMnUr%2BHklh0RD9191KDBOJ%2BoLgZCLsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLrcx9RhetyBET5circAwaL%2FUzA8zIOPXPUmj%2FZwcsvCPKCUCobvYBjRDW7jlocrG1FuDn4IFKG511SPrWsOsXb8lbQMOxEvIwB2CjEFfolyh4wHIq%2FQf7RunbIZbqQ%2B0r4hJROg22sihMtlY8BNsFKn0YRqj9%2BRsfYiL8S2qCJKLu4VJmTahgZNzpsGyniQy0JTGwKeQsRKk5RhRX0kEJDt0A5e%2FM3uYpUxXgWOllb4S4zEFp%2FUqA%2FEGewbdF3bvcoPqQIPP8%2F35w4Ga%2Foga3vwTTOynkoMWWlwG5JgO7MQ2KFBsQmF2Gk7mk%2BdcO5aq6sCOaMUaKUH2TaAdWolZWtdIo9Hm3cs21d36baiW9ime%2B46fPCm6i9yVNqkZ%2F6aufYJE06xyCqvpeekHGZSJAOh%2FsvNNxZu15qpFzW4VAjnZrfn1jrvDmT8AjcTswfGHFtLyUtUZihaTjGmq1LrZfow%2BMNQbF1BKldZTg%2FeCADn3pQapmKUgivWwMFbWW%2B1AT3LyVkd9j0hvdLaEVlksDMt%2FX3Qsif3g7yrquM3f1f3YlmNgX%2FuBO7Li5xZrr%2BXUWsJGwO5Rk0zVWc88dt1TqnXqdJZszP%2B4B80GPCnMdit0eGRnFIklzeEGG3Ju4F%2BIszM2Pn1tV3V6bMMPLIh84GOqUB1uAwuB56106cEFbA0bvk1Mfc1Y9345QxBa8rUKBj551FHkF85WijBbQV43KuUiqjBYyKE7heBOihUlbPHACKW8dZPsWF9ViqcFYzRCrMOT59%2FP516p13FhoRoZpntRv4YpNtSW8o944%2Frd79WM1ua2xocesbNf7HdhYBCbgKsnbKB8NCbtPN7RkkQrBS1yvZxuK7UbJfEw9AljpAnLP2MN6txeDT&X-Amz-Signature=949f9b28ec83d23c61cd13535a0b803be74759fc28bc2dd3a0274d4731328c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
