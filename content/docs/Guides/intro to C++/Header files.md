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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GYSHCAO%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDART95Yq%2F6KVNE8cc8SWks2asGEglMWdJW2f1EWWX5DgIgN2PURukl6hdHq4hO3LMMvlyox8jRnnk1OdwmUijIVU8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNN33ScsPuzNj2oVFyrcA7mj%2FIVfdnbqS4SkmEYjRrHv6czy7Ps9YH17eoB4Z050LioY83h%2Fw9f3oai6E8eGey7Llw0n13vqvOlZj7YaCFXPQcczHn6xW9F%2F0cwcRgBcq1p7F3W203%2Fy%2FmExVXEPTFUdVYa%2Buk7HfP%2FCKJNAp8UIJegcUtif2gcu6IV6AUvhLnm%2BFbPm8%2BAOE49l0kYtx%2BaLPH1bUUwsYZ1f5dvYdd0IlqCfmcLXHYwoPAYn1iEEHqE3fA1eu5pofC%2B3nlUrMJGrutbBiDG55u0LmSFH1evM8tuxVo477pkCZk%2B8CJt3J49PuKMV8hU83m0aAEA1N%2BmAwsP8T2LR55hHA8Cy37KoN4wH9cHB6MDV3wVXnH8s%2FvnbNnTHgdLF%2FuWwxfFdl7bbILYwNnPzTurauqlY9Ku7mmj%2BugE7eeQaDa2snvrl1%2Fvz1nRqZxpcMbZvm2RamS22GxXExi%2F270IQOt1iRhyWuMFs7g%2BpWXy0mYg1gqpz7wpmk3GEeOm%2FC9rlhXcvJpmpkBZGy2BFkH2S%2FZ3nvdKyLgsFpAOmhQaDuyRmKM%2BRV9HntyqcHN2aMFcPp5ur9QrXctTFHumTiMU%2BU9eA%2F2IBwlbcang2%2BeaKHXJnfF0OaWsB9l17AQco0GrAMLTrwcoGOqUBSCDmEi5SObXRuF6ncgstr905oKHd%2FUbifCWiTaWyE0OE1uSl5d7vb537EKulpN%2FwHoMheB6tLZqBKslHJSiQYB%2BDZrV5YYarAwVpzBL9NMWqcGY1GY5VRpn0v5mqjxdzsPQsNgrCA6YOyX60nNKRh3IZBhz9LtUHgI9QnmcdBEQ3eOJFATX6DA3UIzw1EAtgb0NlpDm5yu0eOxfhic%2FxwKcCoolU&X-Amz-Signature=cacbaf1db2f4b293ffc8c6ee5c0ec448fc81d21b7f3f8e788a726d444058a527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
