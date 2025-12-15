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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVE6L2CA%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCkrcMPa%2FHWHVz%2Bj9rf%2FNxtph4oFurO3CVtQBnTQct%2BOQIgHtm2edkqaxk8V332kBdb2wpK75p8hiqkYutvrbn2YOQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJo8u3Ae2TKdw%2FshuircA9fa%2BpW%2B5kesQLhYxAXLqhpx5ORufqIfJhwc1B6uyWtu1WZBIemSclERNvBTM2DHD7iy6Yh8J2auogTqFDdg7edGtAf7tTD8A94YUyFXEF%2BP9RJVcuGQ1e939MF%2Bv3uKgnQ5mH0krCoxJErC%2F%2FcTwR38N0MDcz%2Fm4d8VxKSf%2BJmcASEiTB6iDEZWckNHAGA3Up7us%2BaqGqncuPqIz1W3KegK%2FWmpoCgtQ4%2B8bY3uAyhXHjbQqe8bTimh1haGN6Z37N5dKRsXDS6Iqd6TnReRwFDo0G7HZhKlILuVT%2B7ICsTm0TerKmtsH5N6Dp3o%2BhUwL7zKxSg8YocgIS1RGy88zHTSUvOmA7pNlnTA6qnXNUUdJ05M%2Fre4RjySv%2FKdcp3WL79AQMs69uWjVo7dRERiWccL1zgLjgBoCjMslWZZxPyrZA99BAT11ITBoRYKitVJDkrYGrnDprGRnB0%2BYonUVImLil2ikYBRWxZr%2FtW3DRf56QlXZ3ig7A9BpwmSmz8Yv2WpnComqoOEblWMWCWKUCIdn0SfHP7KbY5hJUmyBWp4BNbBYnKAMmgwMPKDGpTM6lxLDusPjoJyehAhJD4lM61RrlUNC9mc2lMc4v5%2BdJZJG4aMekzfAaaMutZlMODa%2FMkGOqUBUqTF46Z2JAYW359FJkyes2tMMdHeR2KYJOjoUZhw3slAv5ETM0JoAErzBDiwzwo5l7wKys6RTry1H%2FNQQt32114P%2Fq04swh4IIqyBG3XM%2BlhCo9r3074FwCZ1oAZU0XV9lRAJOexaKV3zmCFoFVkJ%2FmzeQm3Eojom%2BojlejDvgycNsoouaMhVyF6eVZOkcKQn8MvA0H6PNupnRqpBy1SqIUZXNwQ&X-Amz-Signature=dad34a262a206c72b3849702930cb659365d484643fc8fd214d936da7a4aa9bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
