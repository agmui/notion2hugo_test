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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D265QME%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE%2FYz%2BgNg9O8DIExxsV8dBDuNLYH3PGj8mQVjdqCuXmZAiA0kNaHQdJNslgQJh%2BbwjsaUGE5XbxjdDUGlgbxxZhTlSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN2t85ozkjaYEmWbjKtwDSQ8Yw4VtkVEPPYtwxj5nP7nvZOcIC%2F1brwX8NqgC85atav2YD55RYbTJ7w3Pik0s7J%2BNIUZh%2F5Z88FckU7JU4Mi3NLbUhba0NM1aveL36flt8PeNXkaZz1meAo48QmEL7rXQjjM8m%2BnZQf7lKmJwqN5FeNitfWPh0z5Scf39UXffaYVpADNQV7kyqDn3vskQA1TrS2QiqD89oiNMjguLQC1xwSOFVTVM%2BhRgEDfZWy9y%2FpFeGkNb8ugVWIfdQ6Krcfch11bBvHNQSwBv%2BD9oz%2FyvKPYU%2FYafkPuDMV%2F7vECq3lB4NkklRiS0v%2FYqsGD1sx2zoGD4xRlMicZzdPSWu5SpNER%2BQGn8Fh7vCAhm14obMoXYYjUOxyAui9h0KyxabtRY28ANitHvKPZrCYm%2BXX%2FJHbsHQS%2BXJKHE%2BAl2%2FDf3LDWp00nB5W19%2Fnfmb6L7rbfKElZJoZwWUUNErn4pOtcsDLu86Nwj8ws1JESWv5qlQ1eLP9k0lr7I6Yq%2B6HgAHxRzTuEabtXgh4tC0NiBCjYaUuvrjHitPsQKE2vtupPe%2Fec9hCZnH5brCBY7IhfOxPM3Jn2A%2BQ0rLpUakWYoy6%2BAHCz19AciLuivjmbECIin90JBFbSrWh7zPLQws7H6zwY6pgE3kCnzVA20Ar3Jx%2BjBNug6o7xbcDx36cIz7sC4n8leHhP5COmgIewWRi2hF%2F9DpnDkIH362yp39a%2BPLIgeiQddWzBpRDh1lOzjpfSdqIsC%2Fj7QbTIPtXw3y7IB7eNh7rPiY2QxIhFpCqqdz56pc8an9nyIPJK6H4Te0UXvBAPqq9YNeriCx%2BBmuawjJGR2ynKD0so%2BWNW4h4Bo239LemV0B2tEB9hC&X-Amz-Signature=730474f2add9a1c82b36455545b315b756ae150a7c323085a1a2b7bd850941b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
