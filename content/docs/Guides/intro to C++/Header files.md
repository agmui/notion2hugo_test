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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEJ564JQ%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHu2Ldo3VAWQwMi06RMW3HZsQyPX6Tj4P6b5VpunF9PAiEAxSTTtc2hYsfi8BkJBEO%2F9g9ZsiUVhf44XTdHqGaTZqAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz%2BnxdhwrKBrQrfmCrcA21b2bHavepRn1lylKGkPGVx0OBb05QKJRW8i%2BURd5j10wH0dDPhT%2FYpb0%2Fwop3nw6DRMkg02sJFcExZ4fXIhZkpC9yGUI1D9wMwu7YzpSmFI47l8aWqujF8R7lUgmqYMb8gSXeWjU7CpPi4w11%2BnyLnwFx4zAzx%2BztiLqtcSQhUdM2HQuUc8FGB2gfBITQK5CbA4MOC%2B0kEI98zNYTDI%2FcEyZJn7GYKqySmgA260m4aUN%2F55pQL3cvERcRrJQZ29s4c2LRmoFGdW6RzUECDQm%2BCE%2F10qJS27lOVTJ8o5pLP036TynceI%2Fr45PElMLkw4F5ES4ygXpAufVwqh700G6W1UVjemH8R%2FBYYdsu%2FQRAfXTu%2F4G7VeQIh7GxUdvdJ4RoW6tIsyR1ir6AElX0S1xqf2HHXNoEnn2Ju8g33bi7FxtjeP8aT56IOm4TVVVo2HPgOnDWDbsZqgaloBTY5x5Sbac1EmmgRxfwzI%2FnvX0pMYtc%2B46NUJQF0pzKYkuXCxMQRB3hJQ%2Fme5W1l6vDnxyh3umbntQh2cZj9e%2BNeoDW3KkFUv5eo9uTnKgjpXC7NPe1Vt15fNuAX7aglx52RATD27PzAZ5FeZCSFGYoDkojPCX%2Fu6%2Fga9ZfQ8Lz7MNv70coGOqUBXrfPwE%2BHaHgjdpqDDnhXcnfCf97deEdpXU8iz8THHiVxORNBieRiNbzrkjf7iDZwHINaPcYeVjXfV8TFjTukMobLdrHdmAazZNz7JHsiaxxzEBn%2FNr1bHO%2Fx8xvC4CPfxf%2FdRLos%2F%2BC9dl7%2Fa9OvJV7b6VXp0KkGpAOf14eiqpcjP3AaxkGYO3b1MX5Q9FnELqAvoeysgrBY6Ui0EFx92tIcj%2F97&X-Amz-Signature=2927cff77014abd708af4d2ba2ced85b8e792f7946e32a403b2f468e852ae166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
