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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVZKQGVG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDoRAwpzUzfAUES1B6oO174a24vD3iRpGtEstUJqIcicQIhAL0BIfpzIDn8IWCWfKemhSTKdg%2BC53cXTKUZkWxLcW8wKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy08tNbmOMMwKChBMIq3AO7rTmnLIGDTkDyIixoTuWey80%2Bngv%2BeP2HKWyssKPcOXPAsSaD31zFwdJ3vHCGnhmRJXLyr50VZP%2FuClAJoyLOoMfjqcj5lA8ZchuJQtfinYl3Z8SNjMSarYe9IvgqYLJeSuI4D1gao4xMui1L9w%2BsBl7wyUuJyhnE5tNk6ele3gy%2FRKGbQotxZWnE5eYgXb3xSfYWwkIsg5k7pgqfrby8DA32BHPvedN4XTO5GInCL6YE3lDRGR2SHW%2BTu2Zu1FrNrcqIkSDNOUNWH8pAzVFRiFSul1dnFJcoqplP2ayQn%2ByDO8f2oGIOwbzC4M3ud4kw8LRYnTdZZ6X4zVc56Q31qUmj5nY3Xcp70iZQhZm6XNZzDMQ7bafIlEk16t4nipVpn6I2QQGRpFVlfuYHdzVwxvFNrBM%2B%2F%2BfquBmVcoMh5DgzA8h3Kh0Le4EWLkrpk5PPkQred2BZ7vMpDeCSs%2B%2FAcisSoTbc2oIe8%2F3M1K2ynl9khzFKccDe00AGjzCS6IbiRCjxxrx8Etgvk89%2BRH255ktjba7Qn7jfNTvgj7zdvcvh7OVntGpN19y3e%2F094jRhEVfXakniDh0JzkHVC2P4xQj1UG47yjHsXeQg8NbrlcI8M3BGTdWrXl%2FksTChl8fABjqkAW%2BzyoYt8XmH1Y1Yo0NMX62WKN%2Bz1BxHLeIIhCTekXVW58LZ5raJmG7O07oJPXgLGain9AvpJ13ScCaUDjFBiyrWPYGu7WdNBb1yy%2BK5YGEzSFPMv2pi%2BjJnCErpEJ1jOmH8m8cFze25IMyPkXGdtTZKjliouFeSElORBkMxeJko31avoWW3bQWlpFQhwqXNkcbN%2B%2BWl5mq2sTEm1XzHpsf1igR4&X-Amz-Signature=4f4c5818667b94c73ed8b0cea8e88fa696fe9f83ff99bcdc113fda4146fe2e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
