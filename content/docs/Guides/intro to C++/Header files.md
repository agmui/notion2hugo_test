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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNWQNUJD%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDbrv%2FFGoahE0RzpCsF624Wy74MvwEgHdy20x5%2FKzbPxAIhALcwOa8eSXmNCAfr8zgaZnKQB9hNOvf84Xmow1hDD1AyKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw77zvWlfngEqtNXCAq3AM08druDHC60ajTNopb2kOI3hpxM%2FmqqxYFP%2BNPNUAJgb5KUEy7PGkJa5TpIeCZT%2BIEnppnrEL51igR%2BNVm%2F7tcfO%2FImvsgfipmnMy0F0BinCdfJsRSTUyYtmRqAcnYj7XddGTOKNQlCeDov%2BjMSe%2Byn4B7DmndufX%2F%2FKD10kwlAfoDsdfeSbwLDA9Etlum7LQTX0Re4BIX44yL4rWR8MuisNNiNCECjdcM1c%2FpnAkMbaQaSCrQVo7oF0bZZZfmWVPBccT%2FtXW9lZi12RHrWXD%2FEqAW1VdXl%2FXBhxcXFXZ68ZEpY4Tm%2BLurmv2XqwSkvfBPCwuwZM229DDa8eZdvmG0eK0g6297mt%2BW6csvIoi0eC6KqskiyLV3a%2FB9mUPSBZ6MVp7WiZTxX0BxdYAHjUjIL9uUFtc%2Bl2DhF%2BCYVGS90OTqZkbrAEZXQmJApfg%2FYxawmtneCVFN8BMIEeCZJ23F5w5uepds%2BxYi66DeKMfvR5fuyvlDmDArI7tP8z8JGZ6XQN5tbylIYm70SOfrBxTjT79bQ71Fj9lKkksa7S%2BwkAWsOOMsRluyivQOunyzjpFgevOC%2B8zeRkEp9sJH9sNcaQxW5MFktEKcVvT0OGMG7llb9ZlAOrz5je%2F6JjC9nNfKBjqkATXXwVyDrpisZ12p0KByCiUcPgNS6AOwweJ3l3xriVVq5bvJOoDvWeUkzEgPPpeur%2BHPRFKXI%2F7Bkyzs4zV4nUNN8GqCrIApQSDCJCcXStith1V5WnpIRntPaEaAfJiKbwORD5GvpddpoD3Y%2Fgkp3tjfRHf9BtIdIKd2V9IOpd71sDKqvU%2BnKGgDey%2FJ6wPkA12eV0QPXSEXtwNjL%2F2Fg7Gh3A7h&X-Amz-Signature=298f8ace4a139220625442137723dfe1d5f924aa5de993c092b9f5e02b1c09f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
