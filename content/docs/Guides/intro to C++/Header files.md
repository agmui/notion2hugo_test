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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YY4BWFD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDqatI8r%2BUOI78cGTVpSa6gNq7VxUP9t3pGc5n4wMkDNQIhAPRikuXHJqx%2BeKiCn%2BxPjzrx8xxyyY8PksQHGoUIpUdhKv8DCDQQABoMNjM3NDIzMTgzODA1Igykq%2BQgStq0bzm1MtAq3AOKnnq8qsJZPMn%2BiMqubyfMx8jUUHQ%2BzS9WTW2eft1opgUzYV1bQxsWpR01GvedJ6%2BItdwAveL%2FkKPpqDC%2BSoLrEaTLmpB8Gnma8CVqvQ62Z%2Bgdb1%2F7Dfs3DQ6jDJX1TSEusruqnOnvyTMnZEtj6if7pZvSiE5PNEY%2BsPO9DHwObNYu2IoQlXWDjC7Edl6AI4xifTPMmtcBYHAYte2NRTTyiEpne64oqZo5utqUiFG%2FIxK4NehVqnJ8ER69Gd8jLOd4uOPvSaT8D6TN5MpRfNQ00k1i6lMqUjNdsXS7Ckf1cCUXa5AuHihBb%2Bkvpac1O3M0Qghhu9waa2tP9fKysMT21agb8gxoDVtHQe4ZSTVIUKC8fkYZW7SPgSIQi%2FTNZ7wDjG7Vd%2FtpfSlTNLWHNeKA0lv1pC1w7IfLrQVBUSmZraUjuRHAMmJbrgHtckPOzQ8D%2FoBu3TtSPm%2Bn5f%2FL%2BA9Qg2Qf6EkVBJQLJ0VDHrD3sqION4YnJg5kwLB5F46OttMOlWfc7ntdgzoPCMdbJC7HluVeDJ4N71J%2BUfhfZtL7FpEmaEBQh%2F%2Bayk2Hegk9S0x6zls3rrU5LQiCA6XnDdG1HFbCxyMFeMHKcFtdGubA0yTsJ16OV0K45tTqCjD3vqDDBjqkAb5vpeS7MQWGh4N%2FNAXqXaK4je3n0tYM%2FQYo%2BwCISMDZ3d5GHB%2FOSsgjdHHlVTK%2FEneuQIsnp17RXTFXoccH9rpBb1xXddcbyrzG0Q3fbkYcRXsITJDuA%2BolYto07CcNwBtt7zV56loD%2BLBD4uhmf%2BloKQhl9Qn8Yf%2BVO36gUx9GjIlo0l2FyPBhfFpaqunhtZTOZxvO%2BE61Zqpcq1c0PCI0Jhix&X-Amz-Signature=db82c80721c875795c9400542a1620c68a0dcc16dd15842705ec53f08ec5f108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
