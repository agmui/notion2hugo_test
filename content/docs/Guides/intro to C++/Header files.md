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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5H4YFA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDWnx%2Bi1VQFjjjsMAn9D%2FX9g7NaaKw76aSA%2F4q0tItICAIhAPliDnGiovhQeFL%2B78WetW4YRS7SqGtvfbu%2FFt9ZiO0fKv8DCF8QABoMNjM3NDIzMTgzODA1IgyJf3G3n7cNLv0v8pwq3APgkczVFes%2Fmkn8WmzEpFtSHMUs%2BZ3OAzmF24KE1l9vPiffIL%2Bkh6aeaHfKFmCsd4ApQSurOQQjFiowZFZ7NYAOA6CbNHsm9FQHsco0R9sWjgo1kXdlwPfV9hD8XxR%2FZWY2kuyGWjxmm2%2BDdyWBZbvX%2BsLssUXcy6lenQNxInyMcaygrAS6qwZXl4%2FN6z0PU3h3VIKmxJ2afD8UxN%2FqZHmmt8XoL4dBbUs5I%2BQV2VoEUlNGL5uQPe8ADqZh4zvLzuaWezlyTZAe7vNU7pQTIVO3NGsWN870z4%2B3nCoGhhJTn6OpuzehV7YFPFYX9JyLvYAUtl4eS8McXZ5sVa%2FBwlcCZihREMAj%2BUlPN4NJ8mOf4TlNPVYObq%2BqTa%2FKn3KRB3LwXmFm9HIyqFLr5p7U6duNF6YyGlcW4Er6uJEzsrMLmCMlNtIyj3mbD6jhglG1KZVKnQsWcT8ufKjfNhiY2OXp9SAIrMV0PvkzTaP1fLpBp%2BiHNhOjr0IfPdVwWPff5jOozUKNGdbbZAgPnwiZsvVsI4J9uVAGarY1ZEUOXioujaz6xXlAkrro7Jkbd%2FkvinrvJrfOUzNctDaWHJDZcPxCA4dOvaEsRJI0V6CZHitEDBgd%2BI6lKqMapqJl0jCNyMDCBjqkARMwJ%2Bizcja73vYZH496YAaAPgRuSqjmCnyYZO8pwmnDVbqjSJCUX6gzxQiKrW6kRoa9Yg23cevFiq6XCAuBWU367p8MKRcBuoysojXBmt8UVL0YOqiAFDoywx6YXlmtMjhNLylHhZtb7BM%2Fyde6HiDYbUmxMxIomJexQ00Ek%2BhWfjO2s1JvrHfkNViop6HIAPlPo2Hd3hjBFAOPbokVIdk6fH2I&X-Amz-Signature=d6d96559cbd2b15f1ebbacbacd4120cbf7064e68215e54f6a9db05deba056512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
