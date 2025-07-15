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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJHKPG3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIGXuDLaoxodfcR%2Fq1DptoXehbHyXKo1NEN9uFQ7NncqiAiAAgvIIpOFn1rIYHThjrJqdJS3U4dh05Ea82CAZO6HE7ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMVqarh2hZTG0iGKLnKtwD2TO4kzdlEjs3Wm85GYZ%2BeZRExku8%2BDZYkB0PW3dZRbDdf9RnTp9egqY1%2FRrzxUjydacLvlQVpnP3ohWylroqaOOvV%2FdsF5jWMpy06at3sXApEtK%2FN1vgyZikkGmH8tcFvghoY64gX8wPQIcS8hUhCl4jnfKeLJPWSnKQlvCGW4rFxwctkS74OVElB2KybxVJW%2B9sK3pw0MF7jE0beoJYkPdEZwk8kIKCSJZnU%2F%2BLb1%2Fh2tqGMjJvnprcJsl4id6Moi5gk0Z8qEoNcRZuuoj3stpDysc3IunsEUo8vTQsLIsPnEUyqOf72PGBPoDUTj61V6iBF1OWWIt862eXKw2pzUozZBnpwK7KgxcdQgyUQ4k4hBkM4OlsrAnXuLGrVljs3iKI64AEbZ0g2PEd%2B549MFzcpQKozj6bp%2B53iuMFf6iOaatUMZofYXqLGkt4HiupYvTToEuDE7kvgBuYP5xGE91%2FC5mtrT%2FojhmC9kerxjtwwziY02wTCdl0h3cIYP5f9l0egMGvEHg83dK6WJUxOMCu2he4indFZXXqlJM8o5YPvzhkvItz3mIu8boP14dExNxKp5QHZ08GYq2GtPWO%2BX5lojp8BX0POk2GlCo85l3vuiJ27PH04dZ5bCww0%2F7WwwY6pgHPbr99GKDeSOImmk6zi%2FVwcKkEsPmdD3%2BebG8l8aQm9oVkNXEZQ3mkssMyB0ry8nR9rtSM16In0kdFWLT%2Fism9JJVnReAFaxGDzdS%2Fg4tfygC1J97Ew8L4BwEKGkCiiaIObTgOt7LFVUdplTLCnAPgJDYdUvffCNwZLQao42KyeBrxlJ2CsPEzsSRjA5d%2B3fOXfc2NtXZESI5yNqCZK1v55CCZn%2FDf&X-Amz-Signature=3f6ec743521014b352fba0132c59ef050d157451cc412180f2a057c7f740881b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
