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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DV7L2HV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQClmFUFCoY0PhwixQ6KogU8k4P0PKdIdu5SQnehMB8wQwIhAI8vbzGv7mWJHH2PAkXHey44uUoKRHvIRaEztTaaUSP9KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYxuYrbPh8pMQKxpsq3AO3pqyl5sDmhnY2PMAAdNXqYw8NPRsDyl8sJxp44xQrkonOw4Pw%2BVmlQ8isuZ%2BSM9Zme%2BBU1BI4okoofXJDbyudHu31PPTx8mACH%2B6PkytuDoIWlsXM1ayQ0qL31K1ACNJiDWKkuFEhoQ7Cb4Vk7HAv4i%2FOuK90PR65FwEjDiI0f9IZhW5RxuiHVAVKagohn87zyMgfV9Qt17QSPy0OazVqWQJyc0kkPG690RKWl6HdH5uW28fjRTCNBmi9WPu2ltLcI%2BLR%2FaIdhbPhjwlrWJeqo7WLYp0TXYbBOODlK6e8d6Nemq7j9HMszzH4yF%2BsGAwiWbI2feDXPVzWVdnHi3oBbtTzNKAFZrXbPFRIVg5K%2BaSFju56kx3STeFR5H8iPwHKRooQfYQ4tUDB%2BabHY0VaPuzR5%2ByItzoTCZln2t7cM7D1dRTWSGZHkbTu96xfELIRItom1xjy5By5%2F4102LDt3Xap%2FZMCs1e2dhlF9StUn5Au2ma3wCTGFZ7%2FwfVbFpLL8Ik92mT8XMEnZ5EQDJ5AosoT%2BJOu1ZS1cwiMV32xQJNkPheDfZWC23ykrAIXxjdQQ4xKNjprVyNtwXZsMwIQzEYCObJ7IY3kpDMBxu8V5oVsBprIqy9%2F88Iu%2FjDH4%2F2%2BBjqkAQt24k5jD4kJ7wfYts4xd72usWEHQHWwk5OCcJp184mJmBo1B2iOYyl%2BY2PfKysG%2F%2BUySlIjc9RqP%2Bo61yfnXKwLPA2vTjWnrq6imyaOPfq%2BbOyVcYB4Su0zGSB8FvAhT7JJh%2FW1gGsM9H9SUT333d2EYOIex0eJMP9vkC8AufDed63SzWvD6nxmlzy0V68bT5%2BKviOCH6qqIUevorZxxHdGtvUP&X-Amz-Signature=b62a2ba9301a772685efc50e835d2992dc432af040f4ac41d3d87527eaebb272&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
