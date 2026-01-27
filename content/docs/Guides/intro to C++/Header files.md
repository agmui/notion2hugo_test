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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDZ3A3XH%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH4eNSgcGdvUZNelVVHxLOtLV%2BFhvhY4zn3nMzPY3oBgIgVbV2uz4N8MQ%2FWTxTJr9w8gyIIVP6Yi1A17OdUADGEokq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLxJbVY8p7iaMCjCSyrcA6MWgIny2U4etnavZzolG%2BddNjqDdwp7uGrTggGbHNriUGLEbHxKLUsACbUAwlclYSA8DcsfYL3Mgb%2BA3BYAk5MBiz0c3L7rr2HjopxaOK90uaVvyIO4bii7bsBiERsrT45u%2FRj7fKWuEV%2B0sK4yre2UOrjBxTks44QAPBS8SzbyDFdzMwalZRp%2Frl67yB6q%2F72D%2FSY2PlCJD0IPW%2FVWWRdGSW8AqvQ4NUnehq%2BiVgKe0HHWbfpiU%2FMjh18C%2BDWXr0JeMJrzJCmGAN0x7QbYHUnr6TG8bmQhJGA3TT6KwXz0d2AdngxKLtpgSgbqDp69c%2F4ODAQxn90W8lOWBfKn4CzspN6pjU1a2RqD3lNiRoYLR%2Bv1Pvi2ckvnElGQ5EIBHe1VwOiox0ZQeaxjVSxDzJ9NgL%2BRRo%2FyyBpLzCOR62eMAyUK5YIzyaVwsenbP8rj1rpgQWPyCivLf7Us2ywA7UxpbPP%2FPVzgyVMwa%2FAm2vUmJlyv5OO8A6tWe5JOVRyDjFZikX1Zmbss%2F2vzABUAWvO56sU9Y8CRQWALJC40F6kiUdl1xXxeq4B7Rj13YBOWdLjuWT1P6mTqgMp0490PLvu2PnZNyTuoXeSAEnVZGeRWlcWz3416vBzAMmbUMMWz4MsGOqUB2iymM5XedrWdGs2hsCODSMfSWSn6qp4T2o49%2B%2FKFtZeHPSx46KX6EvYOTLgtu9YlyBnl3m9tCoVrBpjom9HWJ4aOv0HnM3u5YAAcaEaUj2yX%2FYdxm%2FYAxhfAqVMUE9zPMH%2BxTj9mGOGmCNXcUERKP0FZ7aPWxG76AMLie%2FnSRlDhrytVtqo7CNKULGCWk0noVGsgOTpen6sLDr06%2B0MraQFbTwyX&X-Amz-Signature=f485c7effc0360ae4287df8596ce8c9fb3b7892ba09322cfeeeb933e614a3690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
