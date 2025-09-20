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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U6CLLTP%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC9wYCQAc5m21IYVQDeQLl9W%2BniY2Hpspv5O%2FIm2UjCJgIgZI7JtRl3Eqi0uDK74YxmUZu%2FgvBO7V6%2BSt1YgSWnldsqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAq%2BpGf1GbbJL71nircAyvNaqq0eGE4FuqfffrnIlixttkA6YORBq8gWLoDBr0EDmE3HU9DgehvtC2mvQH1cEQIGpkGGhkWCGvv%2B5cN%2BJLTcQFUtga7pHCO0X%2FQ0g8GThtrFhXQCQ3GT4LQMrv%2Fy%2FbY3eJzb%2B7dKuhFonk3KPQpb6r0qHC2y5IGJeEX9ilSWMncRsZcRB1mJkEjaqStF%2F6TWd6gmZk%2FV%2F3il6J7H9uJ7TzALE5keLkOMO3oHjtzqNrdE1c%2F4tW2Aeumxteama%2Fvl%2FF7vQOiWNnjoAD4Wky6xoUV5H44EuvDBCjqxbjAkaxXquD23PMap64yOs8Xotm8lWtPZD9G04spqOTPZWLOGC%2Fdb2B2zvo5ZdAI4CyG7PxT0RupKt1tkbSB00qsql3j3DHZLqZYhjxs76LUle1%2Bns6ajRgfvbSxyyI0%2FFPE4TxxQR3x4De9JJoIPVFLHYHpOebrJrPgt6NDUBlwctzugPtybtfyOxeBcQaZRhuWtkNso%2B80r2VcfuQusm888aCpwxy13QWKR77PzJdTcrkQ53oEpBk1ZxLO4g3ZG%2Fnr95BTjjC%2BHJrOb1aE6CcHcigVWP0DKsY5FUzrq%2FBBoWL%2BfIVhaghiwg1OOpckpLkzMxXYT%2FHPXP6cM7TrMJ2AuMYGOqUBgGBb7myqypHH1MBOA1to3mNl1EYX1DK%2BwMVKeUaDe3eG%2FEW8UhkAiLzJ9PkduC2aGrYt%2FQssLvBBCCRNbvLPP5snI9FY2jWyjxmW7Rped5gqBmYu83d93y0IJSm1%2B2axHd%2FkP4IUNFvSkSVdLTeya5iTEOwRLXIUSmVRyubRozXJujC3Keg4E2h8V4UTBbxM0C2xaq4vQfL7y2QYZOX0cy%2BxJoJK&X-Amz-Signature=fc2c87e20a1c058c3c4a3c44655d0fd0eaa92a8edbd9b7731de40190fa0d092d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
