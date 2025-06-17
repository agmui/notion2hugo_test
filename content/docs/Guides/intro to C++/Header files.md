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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653YDJFFY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUf212mmBKvNsLPkHAwSETZCBv6gbRiUNuMROmjPO0oAiEAkv1eid50jtjroxkKh6xNpKoH98QQRw%2B7YEym6dF5pT8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOkF4jadHt1lVsi%2BuyrcA8q9NLdmkIxpBBsOxWZJrbwVR9DLdXJSNwvQdxHcJ60Ch7hTTmF9azYKNJ198BnIYXq%2FLfgIgUn5Iw8zQi2gy%2B5vYLCep5wej1k0CcxK0xZVm0Ivog6nf53SmHQ3nWGpvg6bFWLMmw7tZSfjoPtfRcWPELPZtplz0aG5jki7kWSY7H3rXCYFfQbyRsQqrEEmdRh7epfHggT%2F9bMKBxK5izEDh9CB3%2BBJwQTXUetmwKWN9aDJ98M%2BJZaeYyaNJx3s4Q%2FJoP4i2j93ZwNCPveVjgL9jZdvPvN7qvulWftjXuQtTrrbCjPw7BnX0xlDY%2F9V1cNbBJM5VkM0by3eOcDNF1GSrS9otp7zKMZB0pjUXWnvr57U9h8MdCh%2FwbX3zPrOw95PhdvtIbKC1q1d0AT4WKcOhl6ACcsNzqFKcMNV3WnyzcQnEMTScJZ4%2BmQKb8wqU8og5lXoxLdVoPzC1dzRwIoOHuBGRayd89B8jtMKE1zy6t5WJ2exau11JGcCNLOy6LiGPG%2FNx8C0V%2Fuu1Yzc5JgFzstpg%2BBhfARRep%2BfeHgtPtu7FWDfLq3f%2FZic3SXJvVT7Rb%2FfNwgY6SZ9AbBOZo1%2BP5rAuYqHVSmp8YBbuYZVNmqoioFqFLceg14IMKaJx8IGOqUBpUsJrFl92NPsjaKdRjF5f3TvB7he2JxBTmWTMQDhZ5mXMLckhGztMeB53%2Fc0nnOdSalTXoS2yPrW3ZTb%2FD267E6wUgOSu9f8fSxwDMJh01eLyaCgelautruur41XFTFuD5AAEG3s865rp6nx4uwlYVIidii8ePeOD1zIwE4ID5B9tVRSREw6OazF%2FINleQJd%2FwewrGYWR4mQ8wWRCJTCR%2FGeEhaS&X-Amz-Signature=df5d43e0ef7c03639b43c9a02d836b3631b26931f61ce5462eb3a71f8c046457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
