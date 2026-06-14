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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GA35IR%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICzMVcYxlU6TY2RL6C03dypCNEEDOQjG5AAByOzqgZEAAiEAs0MPWEdQA2OzAs97VERgljdfVGJcrNrHgSw67rweSlwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJmNjcQst3%2BEp6D21ircA0%2BVaVeWoTu6Vx4q0gKWF99AJcdawUGBtOUDw6%2BxLtkykSJwKxV5VpNCHmqfBb04X57WVOtrGbCb3m4lrsXO0vTsuqVxo7Y9aZQez2DLprpVYiV4hT2UJR7gELnJHGTIxkKQPd5ghBEnUJzQDb2D5PCtnwO7Rq8Bg8bZjSg6NEkFvbBG%2Bqh1%2BSiV1nxddhmt3oGVbxc0MVZsjwcBniIcXapE35O%2Be5qeTQ8%2FXNlWxH1KlimeTDNuKgTuTioW1EjlLV%2F8FjGlay9Ms430b1xcF3akAuZH%2B1ddtQrfVBUMALNtWNyilT3tPQWSNJ9hyTzbvE9kXTN0egHtFOkR5oY7he397o3A4wxbFpBMt%2F0t0L9x4rD%2F5L7Wbd0NbztKTULCJn%2FmAk3BBb%2FUpz4uwHlRPyO74VfiewAxk225gREgmFV56pIYGKx05gnU8FKY2z7JUsNZDopFuZVmNPfCo7yQYeIRtRmToiXhx5uwYGwdBPy%2FGeyi%2BgLgFkX74FDmdMzNX8QdABdBiXR4E98O7Z%2FGeloA2rDtUm%2BiAPWXtUXRqDy0QkdZWBiFeOtrcQt2nQpUrv7AgHBByijZB8mq9rpDWYlZreXGuH2oYn7PBv2WH5pEDjX3dBTPuFpmw813MOWduNEGOqUBpGSL%2BQPteq9kgUqU%2F9eiCJyFhcQYE%2FUYEQk%2FPL63hMYhNckINvVbQ9KpWwBEaNUyJfihfzjq8Lk8cij5zC1uUrwkpDnt3ZY%2BDbmsWBYydY1ho6EvwcvGQ7EzrCZ%2BCHNNq163ElvHd2L6kByoyDm0wyqrg2x4Wb3joMtJvGoDicHrrWLY4BXg%2F2d10tIrIE2i3F17ffhUayj2mpKawi%2F6hwbe%2BN%2By&X-Amz-Signature=91bde5364981739fa303459a2bdb58c32fc25ae5c43269e470dbccfe70f19531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
