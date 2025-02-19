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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIWAP2S7%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDMGKXLLqxcj5UoGduy9WW2JEVvyl4gAkBjZuXYR8h%2FLAiAK%2B1RpslY8UsrTLeUH%2FWOTYJHa2Vy%2FSAbKcl31oVlPsiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpYJcEgywSDZQe%2FZbKtwDntZl4QfukJcsW9KekcVcMD2KY5wX1%2F3mgGIE1rCsPXoMgHP4ixtV9IhIN8paB%2Bp7mqQed3xSrlq1yMRtd6aLf%2BIQHhlCN92PWb%2FreHEeUbVIuAXnNYNeTGJe1pHBBojNrAIhCYk95nuNuOZqmg9J5ivnga9iD9lR4gFuZfPoaM2fszrNaeJP7OD%2BuVvP49sInOEHKlXorSOzXkoRxHKJdfqFpLAP%2FVoiL58yiJeIrm3TZZ66pjSDr%2FvuxKYGRJqR3mP6dWCp1WC674PB4GwnF2oWOqWq5Chg47axavgdTLxW%2BmJHP90qGuw3nRhBj9OhRur5EzVNAmQb5X4DPT%2B8422It0b3xijmsblG%2FWjvdJqqHl9aumeEAJ5WoQ2IEVpTGrVcccympXD%2Bi7a4LdMAlbhCj4kpMXVl8fifduqda5faUJq1QlmDqfFdHUl%2BMXnQRerQYLoyH1Opnj7lfAsUzXlZD5IW5OhCUdCaGGkuji0bdlduSMwR%2FqF6dosTd%2F82R%2BJ5Ix9HPMZKey546wqxnXKlqwoFdqdINxq4v4mRgONWMqDIbzTli2pPd9nk9ONVlDoUh6PKsdc5v5mUooVwCapKmFlZtwK5%2BJ7pZAHtRp7irQ2wZCO2JjYvrUowsfvWvQY6pgEAXmZ1YQZnyM82o8FV4k05h%2Fvu7jq%2BPUAZp%2FWT6swtNiEoEexE7eT7a8SHaCHnXJxpo7A%2BA54uDWS%2BglAFwOXNOishBs5qSCzFfZ2GBJBEmon4CjizScV%2BWNR1VfcytegCzTx50%2F6vOiKCoGThqq73LeaFNcCW4bgq%2BrJsOv%2FJF2XwYufnJYdX3rHbVkijcI6HdfWNnK7javildOXHJYGNJXIPdou2&X-Amz-Signature=0469d03d890a70c0ae73906a84f6adc694ad91697390c50beb17977af1255bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
