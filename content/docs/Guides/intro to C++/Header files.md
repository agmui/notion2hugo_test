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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZO6RAH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCB6YJhEs5lyJgWSxMpk86Lm70GCdrRpFm7hlpTQUrYlAIgTbgxP3fIqa6PM4hy%2FGj36GiowZajPBeVM5BYBtcjvPEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDN26jpmCj3oTo64nPircA9wbkdU6vvS3nw9Ze2Gtsh%2F7DlTw7wM25vY5fGS0yhHR3Ptmfj9VPdpW47Ck0ItIRPk%2BetbWj4sOikTFb6GrzV7%2FhREpnH1Wna0MwYpvOA0pI06VbcmVDOrIizTaaBgPFYF6YZm3smjat%2B614h%2FctJA1SZTBDKruPW5bnMCPIq6BoVc9km6D%2BJRYLrw6hO5fmvpNNICTy2qgUgqpdU0nY8uKJ8xsLIDkq86Afpwf7UyJ0DJVoSDw9r0cjM7gcI9B6kLyhmSHgdagIkdqHW5jGknkeqT%2BTdoi6C%2BB8LLVsEGQy88sOPy0XYeC6Kc5eGuy7homJdGIN586LDAHkOpwqXN%2B6YlgDWsM9gYnFzjqQW33%2F38ojczW24G8wJUgcwQmLF5%2FOnSSvRmvoTDVGoOBn7MFnYo%2FoStD8E4%2FltuE44iuEQi%2BjucjeLsL6JdKEffB8rg1vr17mUXIZCPk1NpFZrZF8Im3qcpydau8qM4irNNYYZ%2BKt3p4mBfFnN5gs3JIhx%2BmvHyfNpDuFM9dWvXyRiQrgXsTASsPf98npeYwHMHUalHIIaRfHRFjJY4kS9u81N%2FuTmMqjpjP5WOzJ6nL9DsnRwd35GKHuuIPeqtXwcV15%2FK9iEsHhm9Az2gdMKq8kcQGOqUBoogA02NbPUwrPM2%2BqoMOuzWhGDXaxMeG0nsi8zg81jYMvT0E3h4%2BZJh5vlH8nSete7Ge%2Fh%2Four29DZaEdQ6mhrGMffW%2B4xmmG42L48s7Q41ara99HEgTDqtCXkvcMjOls%2FDOGfXsxNsuQHKfLLOmHIgNlu9SawTY3%2BuFdLyOKtz5SdJmDB1Gi7%2BG3I7kFm2UURQEK%2FOqNpgqiWbY9KvSPz4LssUX&X-Amz-Signature=77b75146a68794f6c1a83cd2d1358ae85d00d8e96766aa007ca32f311c55c90b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
