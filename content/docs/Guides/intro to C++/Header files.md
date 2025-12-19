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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BTG6MIR%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC530kzbYyyEKv1uq1xvV1Td88EG%2FXaPNaUCdJximfn4wIhAPSf4WOcYuJYbutLnj3J5ad7mmP0H1ObKzroVHCFPbKyKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTtGvywE0s2S7n24Iq3APPHCQdR5wmCy5D6uWaYKzhGs3QwLZut98kNys%2BAURq4q0kLKwnYRdTvxj68UzUAz8S1PfTBsaoa9BoZO%2FsxklLHsdubrj6DLsaoIwT%2FumoM%2FSg0b0r%2BOo36vFWJrNWmq3UX%2FAFeJy15px1BPetKUa%2BAFWvNcyRPHfkSeXMd887AFX%2Beb1IQOLY3523hKRMph6TXZJYv0DgQQtrMiH%2Fb8ItDQseo%2BK0A06%2BhAkMbWJpic%2F%2BjwGWF%2F3lei0SNV0X%2FU8NMsnRLaIaGeDiiaTH6H909aF6N83klPtOzHsAVd%2FpCGuFtHA0%2F%2FGQ55sBeaxfpTm0HS9s4QbHy6VMtINfhoE3NI6cWpi5hhaCxgfaaotL%2BvNjCBAVoLBrW8WZOsm44flYBEF8Dl0htpbg8pjpRrWx8vkJJDq8MlHvq0Mj6sLOrnS4foaegWPJVhJ2NbKmI3odLEsNCqk1aJ47tzs7hLHUtnliE%2BGGimiJvklNalO1AK7sxY6YrHuxWp4e1%2BCWFmYBwmE4F0JpXoeKvTG03JpfCWijZgqxYfFRsCQBom4X8m23ytIg7dG5gcrP7CYHpyY8wyWmciVJ7Gf%2FXQUrQed2x7Q5kin3yY7yl9zwg1K8P6nsZx09CNIeWqSNFjDCx5LKBjqkAXynxaiCnx8JfMLWEji37T2bYMNq3e00OilmAg3Jg7v2JKvFT94Bl999E%2BdqSYH55JMoWqRA9XBg0HCytOrzKXs95mNuuCsp3AylmiJL7AGk2odtQQU%2BkTa6cRocweHIfhl5ZUiuS1dY5hvL%2Bzx29fwUCdXq9zsPOqiT8k8yr7okBnOGWehye49fwhv6DbaBMGYcrX7BKGqrRhhenu0P0%2F2Ie5zp&X-Amz-Signature=17071358c7b143f8b11ce79ed75de6378f795bfbe2cde461e11d3830eb7aef1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
