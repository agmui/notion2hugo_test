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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5RJOEC5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCbRWE%2FtpVvUEe%2BSjV%2BxxlDrLOagTexjeIJq4Ilc%2FfYcQIhANv9IEKGispRKpChdRrYtxCQlsLECRUAaL22UeQlB%2BKMKv8DCEIQABoMNjM3NDIzMTgzODA1Igxazr1ssDvheldVBQQq3AM4wePr%2B9kEMoEuUsvUUwK7iYeKLy5A%2FYFLXY4N3IUDwnTh6hgiIXp9h8ZV5sx90y6kALfycXkXv1B0%2FXI0Upaq%2FQBWNHpdcdYoLE1sAuW5kukYBY3xGMOaLOXNRYJWY8tM2SQHq4imW7B3%2FC3ikU2BMfSZcJNx8UZCi0vDTYo1EBPKH1ANDDpaII27Kd238UMuyZuistKlRMLsFSjedZ7uSmmwIaVnU1Z1jLv0adeYFht3Z3Kx%2FkQ1gNSs0lcuqntcZD99pfOGz%2BlhV4cm3VY7xK0pvXZvuRmS%2BYT7MqlDm4LNVTrDow2ufHqpIXt9tfnnNpk%2FbHWRoTj1MpY652rf8TndLJA0RnVvOzVUTtCGZIy0AFWAHJIEjW3Gdo7cgPWJNqagnJ1805UQDOns6BG7W4u9QUWDUMlxytNQOH%2BWKbaK9a2ul2ebJfB76p9vQp7sVBlqLxCjBI2ZY6nPaAtybAxNTVhSpQjt%2BKkBmNRFXebq%2F7PtiCcrOMmx7cgXROxzWsdLMqwt6jUQ974SBObW6f%2FoS16rm0vLZnKlp6MvKW%2FzrrmexaWjsRB57F6vKwXO4QYmuUPt6yrxBfIgFWDsU21VhyZgRj8SYsTp0QiVLuCJ6PpyePFGtS6XLDCD1tDBBjqkAajg4Zu0tIzxNM1bkhv2XZF2ZrxhMAiOgbugGdJHgIlcRwBiDiWwJDCWXvYJ9E1qXyKO2ubXURdxl9%2FITkN59cgVwFbrngxDFEs9YNQqIzCx2CnUb0scGrrH4hU4WtipAIwqFry9yFKmPjKujuI23aYTWzfmgoWN8vAYBLQ1aNSei35PmRrpNCjlcnhW4acEiw87XW%2FJg3MurpjO%2BYdg0MSrH6lH&X-Amz-Signature=2ddb685e6a77622ebf65a3e84f03607096ffc91261c0c722222e06e812e22863&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
