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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IP22HXQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxRnyjxQ5wA3HV3L1QuXRd0HAvEITwWYDLn0egNp6Q9gIhANkNUPc9FOw%2F%2FpG0dMmWyET81GphJMDPYitOh3nmg5y4KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu11Rw%2BbkB30eSetcq3AN3hvL%2F94C1C1IbNFnYxPgNN9KYYThCiIpwVLXqkMoQTX7GiwuSs%2BvYN6cGLPpgHUPb%2F2vi36YH4%2FkX0%2B5czPG9buSwUZEgS%2FZ88qAdVkkXSk6CoIUAsI4gHG%2FJIw4pxk2MVGzMNyBQxKi5R5KeBK9MZ2%2BslOSnX0P7Tn2qxBbU7GTBqDb7XBeHT933O5UgJhlpxzliXRDQKfMHcFEttCSFpcumRtXSHUFQkiz%2FGsPjjlo%2FydxIkbQns0J6f%2BpGi974Oo%2FJq4kRLZzR1kx%2BZtn269a5DChFkbhtr37dUReS5Y09tIWJB3oLkMM72ydSINDptEGRB9PjUTXym%2FDG6kukSMKExB1yZR8K7gmz40jMbGwReblDPM3pJlZPHxHDf21bWoTIeXi%2BdYfLCN6J%2BaE3o5vByXaWPMX%2Bq89NjGgEhRi248ud13DUvQGo8HqJ1k7qHbbh4aY3WNJjQGr6Wu9UqC3ZCWSbBcw%2BQ1HUU1pL4Nl%2BOMLTd9JZPGYkXShnWh6zGn6vM%2ByhixdrptR9CxdycnfujcLnDd3qdHzyuz2Gfiw5EMCMlMqBmQxD8FGJiZMGp6BCBUCz7oxP9TlPo7oLrfP1IaBN0nfbqiuYwsd5LXoG4BotgC%2FgbmVnOTD%2Bu4zABjqkAYQLjifvTFL%2BK%2BUVUepaTzCd2MIRZO%2FD5L30sCHlcDjeEzyvBodHlQwMa4mpjn45Eo5Xxrem5BbUHhkegAdwQccayi8NvJT2dg4fAGeMQCzpzOKexL6%2Benz6RC6YBF54e%2FrOG7YjPn8b7OSa8UQgtgiii64tgesimkwSsGK8lC%2BGSdgtxJCf%2BinIkAFWrPLbXlv7biA5el%2Fxa0A1rhCvmtQqbqKz&X-Amz-Signature=c827301d1685f01300296f57c7825cac8dc2216414dcf47314079f5e553c6483&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
