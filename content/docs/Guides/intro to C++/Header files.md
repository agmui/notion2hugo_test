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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJLENP3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCAdM2s5hVCO0dZCNJN701Sw78z0nmUsxvDT%2Bs5DOZ2cAIhAJl87%2FKMNElqYYycRYY2TM4P9GbLYice7gIdzgLowGfMKv8DCBQQABoMNjM3NDIzMTgzODA1Igwu7tKQXrCv8ALc9TQq3AN%2BXaiB4upNs0kO%2B1IHQvgFHT5YN%2FgbnYnNu7ZigwsJEGBrCwKVPsW2PJOXBAK%2FLA95uxBD%2FyPBvkf586u4o1YAp%2FYhjrRBxw9wb%2BDDwby%2FH3%2FDTGTyMPbA3lDkym9b9LkSiTS6MU6A1eXjyVU3kxpbphJa8I6HPr%2BZrBZOypK9vYmTnaVFw5mXfTMuEq7NP3XLWuDcKhHm2ztfYUvuCpy549iP2Yw%2FzSHo%2BJH2h%2FU7djz0hiFgahjMNjf%2B9i6WiSWCzTmqJEqt25YwOCz%2Foq99LZBg45b73a%2BPjDaWKFO8qpP7Kfb9awuqEBJKgzuAZsXHSlqQL3Tsmnw%2F3PHWavllIzYxJ%2B2Tw%2BweAruL1x8ka5cv9qgtQl4RQPYxZ0%2BlnxceinMD4NEw7YO49qVIfI5yXEeQWK3HtPIdsZamJcKGm29ob%2F87QtzQ95TWErOrn%2FOB%2B7AoqmV0JVoSZNIEA1PzdE%2F0xgu%2F9MA05fjMNSrlN2UyuGd9CM4qT8DCmPHhyVBAT4V8fYtNNvNMjlZWsH%2F5mCt29uDNrYF%2F01KsTcoPjS20mc3VLvY%2Bx5wMvBWD5ZK7saMALn171BnsUJ4jYNnOjXnrWvXqbFv2qlkMOF3pkchoDUiFG1c4wRz05TCRh93ABjqkAY4gU7Kxi0YTkN946nR4QQFSxEvEiM8lU7%2FJUmqPdM4uiA4EjtLSvi6Nj5FSh9udaPbiDDyCE0SoFBvGqHwOCoY%2FJrGVZAAdmmH1l2WWUkqKPbwsVC71DXQi55LeArmRwIEsWcC6u8hIUs4LXGvUEBE7VN8YLcIhsnQwDxnp8GV%2Bbl41CXn3TfW%2B13mDNAhl0REcbsTs8BPgwn%2FpGW%2BMeToWBXhd&X-Amz-Signature=fbc52819a5053e16c46236adaafff86b342305f9ff3aa4ed401151d99f534f03&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
