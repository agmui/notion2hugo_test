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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWZFCFC5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwsgmLQaj4cE2K5YJ%2ByLEETzmM91J1%2Flj1SbqteH1vzAiAwR2U3JylUsqPLsPfnmLeaGrSuLrdri2W1G58kiPIYKyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM5Oy%2FCIHRARsu6hohKtwDAmMNMcbOx1y6QwU0HJOjMTMh4nXKnl%2FjcOxLjnurnhoP6tzLZ78tk4Mo3ZeKeX64q%2BGGq%2FqAhQBh3m39OjTtQzhbNJcIl5%2B65klz9sRsLq80%2FJtotYIXAULSUnCirYLh6BuE%2BUkaxYG93hh7JnYKrxmHiNAxeiQN3wonugRik8HDzPKJoLuYAUtInMLG1SJKBGQRkG%2F8sZfoRxEyKL3EBQ1jvq28T2tgyMoY11TrrKIbLw7HXRQeJprkNfcFQM%2BYjriGSiS6HgkbRzVW3IVzos536ZzCLICuCVHx%2BIG6V15ZH%2BQ7y1s1DDH8RadIfoRrFbcDhlfJGsqrGUveWWXdzlkvm9ST%2BWC79do%2BeQ2MBhxYz8Xx40iu8kUfYJLC%2BPjj0GEaiR2LuiSJNlVLCF%2FcDHw4yE4q9HkMwhcObT9j%2Ftpp7ABKE7ZjOAxs6D5d8ZsIcsFcWPWyT%2BXo0kE2b%2F5vdQxU3kI9Z3rJb9ryJkenA2%2B%2FsxlSpM7zT9XnPG65fRoj0RhM43ah8TRt6f9hAO73PQZcT21am9yNjYQdw52DjoW0OfY0%2FwymPROGQcqClYzx0yaBSH59n3eJJuRPvXuh6G8KTs0q4AtGL%2BvTEOZwvuEDUa4wFVSN6BSdT7wwtsW8xAY6pgEuWmkfHaq7PrN9z6aHCgYpqhuEv708GzQaWardHEoLNJWIzYFfsSSMDK2620AzM7P6uS9t%2BTcjodKKJDZPht7DECqMyG3S9v2RJ818ExQASClciIhhrpsg5N6zexP8tNOGwapElUZd444vJsxdxivTpF7%2Fe2rr%2FnyHeKWHOGzt5OC15hDQwn5kjptiIU1VVLvV3R5sqK3um2R0BbUDXOB%2Bvw9NV%2BiE&X-Amz-Signature=550c6cc8bfc1bab7d19c37a9cb7ff86216cd6082670e4be65c4d43596f1275db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
