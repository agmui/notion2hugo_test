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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBR3KX7%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQChq%2B8fYpxLvlFwqzwhKGH%2FjQCp%2Bpaapyc1ELm6JUMzWwIgVbmKu%2FfVeoHX6yEBegHTKV474O03Rg9lMOY4mzXGNfoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIL32JKeT09QjqA9lSrcA3exInTUw7I9dyqOhiXfLuLRTAPnEaw9DG4cjBFjz0xkFLL5EilJzQllumPHpZ4FQ%2BCvv2iU6Q9%2FfAinC193z%2FaD1hR7lLm9OmNfehjCoA%2BCPeTpbOxNtc6lbX9fEFbU5L7gm689Ki3QNb4jGyXtajhi9VSvRY8RYkt6YMocDooqbpserU%2F4m2%2BozbvJMlwMgQqTf5MlC4KTc7BcqM5XvXgf9BBehnyYa4VDYSfnawcD6vNf4omjeHsYjKv%2Fg8Tr8g4C4CdPq0%2Fh8NkkOgJ5yfe9DWwvUh19w0AvNPvr%2FCT5kKVyt8pBDRg8DfBW4RcXVio8bqkkZzi93cISs2oO7pjA7AM%2FfKT0FumUkLAGnbsPZKM3JX%2Fe796DvqpvWD%2Fhp55DVlsTRpd8DHam4mJUJ4p9%2F8EM3bSDxiYlt%2FTAlRcifntztRj4YEnkliwu1nazc31X9kOIZbBzZ6dxBHN3KoHi2FBSTBdRGH4AemGby%2FTIkDY6SlcFuz12kwZhZgrr4fgWU1pWRGS3xiCTY06MXkrgxHkyrDr%2Be1V8%2BbGJ5Jk0L14OAm3M8GkmO2SV9jQHuF%2BAgVirXJxI5RjYbv%2B0eTFosMUlgljKnBCIM1bcEVNmDkrwoIHLXiRXPlhwMLXXpscGOqUBxmHxYJkdK%2F%2FmATQdBLMSTnXfG59NfUqjhBjSI2%2Fnbv97hXHOSuP9grvMNbZ%2BI0nRuPNlsnQY7f5NmO8FMEwXkJXKCX5s4xp60KOTOwLDYewjVivqA5twC7ZmMBLbVJDmcKuT4oLAOKL0fpqmEdOWM1IHJHuD%2FoV%2FMsyMiuNEV9%2B%2Bd4iWpZYeznlgNvOWmvd%2FkffHWJ4ELtHzx0U1sSIENximkzJA&X-Amz-Signature=339792c391816e746713ae7080b68745eefaf324897314378fd5dbf6c406297f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
