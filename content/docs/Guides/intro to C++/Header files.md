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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AXNG2XN%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFITnKDsBP8wu%2F5cIdoRJSDch%2B%2Fa3RGDTCTMZCJNcNANAiEA33WdZxfPTxo1AcqWnzU%2FrCaJWDWo%2BfK5Bi8HWHVKkFgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ%2Fx4XqqsdHVZmE%2FkCrcA6QBOrB02d5RhRRf7rGBE%2BPKQX3DBtwTFylJVj4fdTABphg00A3ceGeyAOrsF0hSJ0U80FtwPAeJyKyhSA0qsdDo6kggC63RyLpk6sfurycGQf9rfvWhZQvG4AkzedKAJS9rgRV39HyEyLRaFpK7dIJ5mwG5OE5MZymyW%2FUERwm41SKWlggbPfUrKnwIEGFjUOD%2BbXVWPWLWd633OnZzHD1ClbQ%2BriS%2B2enTvMb1%2FQdLrjtNNgKfXnnszRw%2FR%2FocnRBOdLa3CYVHPLIBnUOCQ75H37qKtLiGs1nNKIUIkaUFCDehMPTH%2By4kwZ2ubhVhOyTHjMdJ4VrEfoFogZaKimlE03ldPBj3BulFHuUVI6O6%2B5BvAIa%2BTpsbjqZoKAb1gcL0ut2IIetAIprgvc01NVRywBPFxVnVLMb3W9x%2FIVgFRuSZFrr421Xd6ptb9qOOlEQhxd1Uw9VgMrEaJdg5v1l4kaJIPieBgbPW%2Fs%2B%2BpTiVlVCrdQ6HnJ7Uuq3RsAsmBa6b7uDNkuOhAf4OWhypVJ%2F%2FWQCdWYvqCncx99v%2FpAIUjw%2B0Q3xhoB9IWyYxbs%2FLTS0RON6NGYmf1aTaI32f1CrfX6pZn8epYqx3h1lBaH1VVYl9STDm4P4CB48bMJm5q8cGOqUBl67Ye4jRpMxxfN%2BoWAQ%2F6G%2FYJzlXm24Hgf7IBi6LSOABu%2FmYefPk6nUfUVIuoSYE4DIa%2BXc9%2BFh5xxUHpglHVAcvF6%2BXwvoIlJUoJkY47K3W748hbmDjgrl3KVlzlivn9xojBAAAc3VzfqZrJ3XDGhf5Vp0UiHC70HiNiMM0e9uCqwAt%2FmDYsb1hGZ3dzeHTbBYcRQj4Nlc8tllY9jMcmq%2Bo4SlW&X-Amz-Signature=07eb4c47368189c9bc10326975843398062cbbfadc82cdf605e5785e3f38732e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
