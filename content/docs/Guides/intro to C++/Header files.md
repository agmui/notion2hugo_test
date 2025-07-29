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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJTPJ2A%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe9xtHR0zcEae1ovMhwlnEE1JuZPpj0elGg4ek73PdnAIhAKJsBvEWWhjJFvGcqK8ZCX337fFO4i2j6mcyUl9zsPGMKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws0X1dUkwGAdg16Mcq3APeEo7iQajFo49%2FvLAU0t%2B91SkdQeRIdbNRUO3E%2BQe5i2pd0bUtJF1oqAO%2B1vsw1rHGGqnoTe7R13fTP53nw1tsdkhP5o9C2Wm%2FKnErHbgkiIn%2BHubgLkax99TmO35ekwnfLGnTQxiAbzL3gAa6smz8oEYU%2BMzDd1LDayaMWut1Cozcd6nVvJlMNSFuvEQuHdvx%2BOVYRLoNh7bCULly19e4OANWuKYffMEpOrWtBHQQQo8b9Hw8UKgq5w5VwAlRMwlJtsMcodvOW%2BLC8pKOtvq8HUPCkPwzGyJGL3fLLf5%2BFdXJSt7CnxQOk7B0hyWk5RB27JFgwgVZDryhS2Ac1TR9cc0pmkthrXYXrHmxZgWjnA4zK0%2FL7ArWHPO2%2Fd9oo1gwy2Xznjfupwjs2u6p%2FgdsjHGRh%2BX2lzdGjHwLd2BjLyPQ6LeR31oPhLpMgYFNyNuzAPV04%2FIsbaOqdcr%2Bf5hbBGmRX3s7%2F%2BSEk96%2BFxtclYUrpHIF%2Bt%2Fl699OQOf%2F407jqn5AEtd618BZdkdITws4p8LecAJWlebB14DKVtoBCn%2FT8ec8mqZpY2aUeDQ3tqOMhixa4kiFBNVRnUfEUpifXnFYuaMJQpOiaIId66Q3qqYex1VQ6mE3ogcTgjCV%2FqPEBjqkAYSJq3hD7Fb5OzT5MM2WekUg6dwgtNXLmDLnYNyoPZRqjDDFcJ3WNOxVe8J4kKe750eZiGBMFFCZZjjL1KgsEoa%2FT%2Fh%2BuNtnuSH1L37CwcwZzp26tmlgudVSpKdkHYmI9ifyICugcg9UArTuEbmNFuNcY3ch2oT1g4UACvKAEv1SJ4%2BFoGqIubquzh7%2F3IgNDpbwI1Bq4ArZ5T1tqJCRrkmmSfCt&X-Amz-Signature=ea6e2fe983a0cf65ce15ac2e966d22ba6877db596412e73a0a814321d3cbe50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
