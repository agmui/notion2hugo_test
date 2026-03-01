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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWZHBGQ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6u5haupWHOoDjwQc29JYeMYShx0xCApxy7kgvMtbmoAiEAudangMju99p0qUgXZxmrV00LlVLl%2B%2FeZuJpS0FrbeWUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMquawyZoG8Sm3iQKCrcA0aUfBM5xbjBiGZeFJxEtg0uxzGocbwzGggGq%2F408DQcsgMEs2fhyF6MhibxYtgWeTOnRZ8xCbrPl8Ib70s6cyAE%2FZJS5uC4orYAwiAcUiowKBnk%2Btn4O%2FSKC5YYyRIX0ZLcccvW8Q4Re4Ap3RWBOKKq8p2hP1nrH176Tg2j3Txo6Fch34dWvP8gKy3FoNtRD6qW%2FZ0DJEq20SoWMMnP4p8oy%2BqcfUUmg%2FfCDiyKArMUnL6Hx09zUNH7SvMpZl18qSmYzqLGKalsORmjwv0rVMIKoH75QCMNf6lsPHa3pAg8ES9Zu703uJkHW9RtGtxWaEbhtcAhunjIBbpxY8QQWYjSOwhfkEIyOqzchz5uRJW3IV2mq1LbB9yYr0dNLjUDjiGoq2T3xSbZgIHcc8oNjl7WIdefy%2B0Ycp8Nq8kLNYg%2B1XmuRdm4ZPFtsoA46fWyi3vGd2geKamiYPBtCdoapZ80dfWG16IHVJFqJ7G8U%2B6YLJrx7tWl00BQr4Z1W0pBFCDpS8iRhhc%2B%2BzkgkQGEDZavqSAZFURS%2BlC57EIRiZBdXZNV7VyOC5m1q1rQZOhsISJJ%2FdUuuraZ5VKO2WGuoWNKt5eCw96cHoL9bmbWEvm6S4eBpqru0drPaCcYMJeujs0GOqUBt0Nf8Hn6a40kdRQiuFbn%2FFImwGl8opu%2FoeJYfh%2FyM52PfwOJAmTTU9RwvOUikLvs%2FX9wrrL295WlJp%2BN%2FEMdoe79KP2A1BYwEVU7ApIEqORJPCID6Lq9wrSk3PqT1AHtJ2JOlD8aSsg%2Bns9qqF5Tb9G3vsxsCvL%2Fvji45LoLYXOQgUn4dAzIVLHHY9VYsrbGl72jISaIpzEUxgwzeC8BBnZBPjEj&X-Amz-Signature=d152ff8356e3cc04d10bfaccb41de5ca5060ec20d8686825dc4bcfe20023e04a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
