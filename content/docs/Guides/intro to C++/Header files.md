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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656SNUAJK%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0DIUHn5AjThB%2BP2hikcJMFktY5Chf4%2F3WYtPxrxswZAiEAlaxo6i9GyVeL1mqJv6OHebWzlQ95%2BwuKmRBvr%2F5l28Mq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhFVs9txkn2OeByXSrcA68roYPycMcTQHAPEH7dRUhkefEKShj1UxtDeYL5eA3wLFez%2BwmDhGwjtixPHKqt0VaGsfiBs3Dv%2Fo17fm%2FCHqzEX1tCqxwEgRDhlZGTYRFSxu6NRej9u3h9AY0Y0IaXYRkFhIG41ErlMg6Vs0Sz4u8VLdYTJUugkoY9CvOqKt%2BSiY158WdF8m4IYRZtXsGA6KRG%2FksO3sL%2FZSCrd3gVGdzpZAiv0VlGAww2wdIG%2BQ0nn9AMigeHWjfJ22kdWGvm9%2Bd4vqcdP7G2fJy8EyaVPssTT%2FxQv%2FHqd5%2FOf6pevn1bok6rTKmo%2FNJWsHydhwhk4ION9d1l9rBDRRox6NevqqMXZkN7j28NmKudov5yk4Z4SS58wh2CrdcktcH92l%2FT8%2Fkds%2B%2FcHQBOARhGdsnnqOKeqsMYDzzwIdm98R%2FMDI70gnGxnkTGm4a3iDjLoLFkad%2BOeIcqLVAPHzlw2zhWmkZGSSVOmJ5smBXp8i0itcCVLlDiMEUT3eGZj%2FuxJ8WOak6IBqqBI13ckjsKGmW6Ub43T15joK0l6b4yuba0IPv9P72e60IV2Y%2FoP8FVylxzw7ePbBV43l1dS9iru15NKaYutluVlz9wBJnVBHZDuMGJa6x4tuyYUo%2FWw%2Ba9MPX16ssGOqUBIMO4J%2FpJ01%2BZTErVaGEuVdNHTP%2Bp3R8xO8RQTmuoP26QP07RyCDfntqp%2Fi2kMtmDwTDv4iXeQ7yv7CTciBUeXDmC3Rvv29HYYPXsLN2TeyT8mDGr8DouqPViesG9o8EvEqzYyjAb%2FtGONh8zpQQVU3P5txz7PzFoz5mjHdz2%2FI1sK83yEdqY1keREC4hxwYmZyn21ozrgbn06bXAS1eOZN%2FttjKt&X-Amz-Signature=189951d2721b14f30dddfbee73b2ad5d6f3d23d1927aa68c3cc7d7d18765d317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
