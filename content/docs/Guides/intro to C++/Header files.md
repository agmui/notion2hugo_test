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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDV5UNII%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC58677nBHs3E4oBF14ZSifQIm%2Bndkm68xCXqRHCZ%2BE%2BgIhAM3GNlRnmF6uYobUenBmNWug2MY5VvruKxqzhOe%2F8lNBKv8DCEIQABoMNjM3NDIzMTgzODA1Igw6bQ3LQPSBu8XU3Dcq3AMkM6RgcW12M1infWZK3WKPz6PMLn8jYzQnxEOO21MCqYSxSU5Vn4jyajjEYmEPcQuIKR4Wm7EehjUZXJcmrx42JRd401WgXla3g7x4OmFssjMo%2FfjnsFq8qHSXtLAgpcZulwdy%2FvZ8cS3Pq1TVYGv7ajGbkHQ3p8BsQ0bIubCKVx5CAUcsv5cLrRBr8vSj26W3h93c48T%2BH3qfLMR77Hlwi6x3QrhwDY6LrcTBLZN9IWwxLSHnx9nQ1U93XOutaK0WPKT5aJS%2BWRvgqK7s%2BhgTBJ5TG3iwTnAPk6orZIb3Lvd9Ooj5uucbjo8YClLkDs1PwFYn%2BufEp2L7lmxDEJ2BYM1GZROfH0LQDe4%2B36Cj%2Fr22Rj2%2FphIvEnAxkmwyLXYqwFiHMwU2BX1IdvGRtIQRFZn89N5zwafFv5Z0%2BU2ag0EvNex4zJv2sX13czW5UJ2r2s4x7XZxOrMCLUVylGScXrW8ANr5JLUNQLvJbEePAykUy0WZ%2FaSuoW9rQQGe3Q4MUvsLvSj89LU8Wi4TZa4xw1v6hv1zCedBv6kL0dtb%2FXO6t7kWIry8bYAdl515yI%2BkKuBIetiQVhNv21xz5r5NVfuvKqU3KCPxw5jlwNu5ajuvQ34YseoEsR1bzTCx1ffNBjqkATQ30T4yJDomrCVHQ3mpuHwdTXuscLviNwhVfZQUKejN%2FM%2FyuLNsC3R7teTBwG%2FWBly9q6Use6yrcys7xWV8pZhv8%2B4TQiVUqvIqVeDQNaePRSLXMOxeRhAphbeV%2BraqZ1dIkxecbuiY0xnPkIvPeADDlvAh46QMVrPFnwtgDJK2%2BA67MOsG%2FFClpRKxLe9AKklQQq8y1hj40Ppqec1m5o3xG9h2&X-Amz-Signature=0c70cc5dee747c93b887536193dbfbb10cd873fd63023a9e384e33bc63f27749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
