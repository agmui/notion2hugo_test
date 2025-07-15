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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLBN2QGS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICiBJ%2FxKj4TcjLeA1V81ySxCzuCDDNfS5ChWjemsiGZnAiB1KUg0ZJYo9nga3ndI5lO2RgtqkIQ%2F2WLUBMZc%2F%2FtJOSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMbOoMjOPxOB%2BK775%2BKtwD6zSWQSSIG43kEyz%2FTHxiKZGwclW5tvBVM0JgePyr0y%2B0lcsbA0kzs3vsyd4BZa0ecH9LnM1BjoqRqluxuxzo7hgRJxj2jsGpV7WRzm61smsEiHJ4ntXe4XMq6%2FNwagJzczmPi2YInjF%2FEOU0RTAJ4lYn3tXn9rjFh6u1uf8GHIWjHzonY3ZeTJnMPSYuJfkGLERZuPNuCLnrT1spF3Dh3PVn%2FXp0CJHQTxOb0LPKfJgCYYMfnpaJEmwiIhHm1s%2FGhjdnpyUyZiqk1KMZHBCdPQXb%2BeeCzqaZeg9yACRy%2FG4Wn0D8oVp4hW%2FEawOSjPUFb6AcKoQMT8o7E9aiX6hTW5jbm0QdM265jXNvXX5hWRPnNIFSjSD8C%2F9z5kbal%2F1toQ%2FfkZGufUqXcraCi8FMmbSIMtmveLmVXvSWpT6mbIl%2BJZWMG8V3f8j8EkPvVXoRoL7xl8LDnP2MhqYTSNU71kj9y3hB8tlHC%2FcdWIokeHo8OA3tdnMFwXeR1NOU0EnEOGoV2zWDJLXzmhSqYaUJDcsv5CO9UMi7kpxbQae%2F%2FNezXon6YsJMAp8hKAyODjKtObhI2FDo8gOfyoiiWjPmNdyq62Ct8AVP42I6AqJZKG1CG6lanhiUNXNE1%2Fow2bDYwwY6pgFUfDa9FfaZ%2FZcReYbpxck%2Fe9R3BFWh%2B2%2BqGaPsX3PmDThyh40gOBWSr7gABnasI3ZkGOroFCLuztkm5vgu%2BKiLeAU8kzw2l9MIwZ7NDL7M9F1zg7gwLiLLCkaumUnJJTzNwwJsAxkmWHTWhBI7kDqoJZftWDWOYAlt2MvvMhXbWqycPB7woRCL%2FxbDT%2Ffuj2XMJaO4Lpm72AZpA8f8QWqTcT8CMcuB&X-Amz-Signature=1a4c1cd162041c6b3eb4721b8f3638496190e853f3f98787047b272d6b715d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
