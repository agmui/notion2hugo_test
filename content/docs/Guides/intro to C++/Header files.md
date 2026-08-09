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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSWDZOM%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeip9GCDLeWp80bB5p6vFQeaGInKkXzKbPgINSVQsIDQIhALHXyxT4bAw7KgvCNLOo3Sq20jqqV96hC66Gi%2B1WPUwYKv8DCHcQABoMNjM3NDIzMTgzODA1IgwKBcNdIIuCpmREn%2Fgq3ANFYQ0lySiEA2SAQy8hJxrnxIhgzNNidATSs8D%2BAPhLFy8Gq3gxLHEYCh%2FHPWjPfN5WRmed1NdHJRqFNo0YDb60Pn0ynVzN%2FK5E%2B1FKrvz6YJoHZKtPjbyXGLRKJ8dEuHBgmOb8BLjov9GYBQ7alEcR5rgG2SS9rDU%2F%2FXvMrdWiT3LpSL6zD2YjYnFYuAyTib2fYH%2BjrgPdH2tygSdjFu%2Fr4LZKHYOBVsJoXl7sQy6LiPTafOzVDDcqrnN%2BQiKzizL6UgyYiZ%2Fp93lh22f0vZBcfPs6EhH71nOkYnqlSG7Gj6euTadJr40DGPV3n8LOWEM%2FX4EeTwovqT6bj3GKYt5IptKz4PTqO%2FWwVGAaxqf77cMmNBtTA%2FT0ceO%2F%2BvNMs5XbgaJs3uXKs1pigZZcB5Pl7GKyQFVKhV2Hntffk6MeVSVnoJ4JRTRsdZnUu5JZrr7F24fW28hs%2FG5oAu3FiLP1kOi18a8MREAOOV3GwqUYpakl2anSc%2BWrBMgQC2nAjyLrTB%2Bufre9vXY4%2FfzF1eYsAg7rTUUTfiEN%2F1frns5mgNnfS%2FJB4MoDeEtc2LCAZ2sVTdt%2Fh0xrAm8y9J0o2fRJAdigYCQYCZUzxP1B%2F9V0oE0opW0Vb26LU6HzFTCw1t7TBjqkAdEhIxU5W7lgKy68f8xh5UFze17VbpAS0PRvNRdBF9GPteWiGLOa8ln%2BQZd1DGU5tu6DMUUvBbUbjSohN0H3PQqvmLYTVztePrigHq5DHnyAHYpoYB8726eMdqG%2FbNF9hqVgqAjSZhq2YInc8kUB5RBiSBMH2sv6eodQpteNfZMqQHKdpRQ2gI4CW%2B5exJdQNCPJHj36bbVp3x5h4pH0xUL%2BLhnJ&X-Amz-Signature=413bdbc89d90489ae567c66d81694db9e66cad660015d5eda682ff2ed135fc93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
