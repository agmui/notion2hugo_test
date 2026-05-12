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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WY42AG6%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDzUlipFK3Ni0qVavma7q8goozyGAgBIwWmepjrHtOz7wIgZ86sUKcAcaCsS%2BmiAGky5qZ8NWB4N6wp%2F9ulCBU5oAMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOXC%2BJwKeeCu%2BZ8EjSrcAy5RlySRIj9IQ%2BC%2F8CRyRbMKozTNsv1GLwEQ73a%2BALvS1EmDJlmpMG%2FTvd2h4f1dgasKodlYIDVauE9P0Ts9XnL3zRLEcDOgqdKa4UPBXB6%2Fx3m4eVde7o0YgqyBvsnMUpcj0JHirhxAUPRKHXrgWG2pxX93DQBpOpYPyprBHxom%2FET9z5eloF6BwoaXlqwd3ExFbHACv6o2f4UNOZw5Gdr0aGopHjuz5tL3jMdZiqK5x0AGRvOrmel1qM%2F3VuY98QYfOHv34T6PZI7V31cRRbzVzuKK6qu4zNp3aP6krMZrtkaNCBgHhtBcmG44UQKpc0%2B0oMs3Dbs1XQhvaBdwjsDh8rPl6CyFJ6WOROcTl9BR%2B3V222MyvGLU0PTatJ0RWLghPqsZxDJ6Q4XucgOPp6g0xW8BZ7txLf4LMlkryWHiiek9h3zlkhkTiJiYMm4SaY28kyl3bjwZuRtm3xqfRdXND%2FUCKbPA0jWKGGt2sutQqDW4Gwy0Hf3jVKixiEmUA2dK%2FyC7HtbYd3Hk5GX4%2Fx%2B2RMi2eHIwcvgEvTj3lR8bHgRjmL0htFmLxcuTDQi341vbQ6srSvL3hHYRSl07XamlZjh7fajYobBel8cJ%2B3CtKwMNAEhsO%2FldrH%2BGMI%2BhitAGOqUBO0qaECFoit%2Bx0qfKoAdFs7nsRsxV1ahd5x1R8YekUz2P1pFTAIr%2BSwoKN5jVxiN522EPjo6FNTQmJGF%2BzPmF0lxRxL6FZNRX07X8i4XazLvbbN4pNN2a37yIeIyMVVP%2BHjDoxIWIwcO8PWEG6N5zpqQVDL8U4Gd7ldyNS2paUCcv0w3I2LneqCDW6zZqYEEG7S9OuoMMosF9NW2HYl0xhTtvMteG&X-Amz-Signature=30a830dbef48234927894ed3121c7e347885dd8ccb19dfd2b5724909bce008b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
