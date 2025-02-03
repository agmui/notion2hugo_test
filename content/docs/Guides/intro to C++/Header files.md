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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W54XXSPY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArAiGQMzjCkDUXtDRfeAtS8TMk%2F1tP1gJPuNsiN8JiUAiEAwIwtIfgfmfd2q7XZKhvaz9sWm8OPuZQ40yOcnggwzgMq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDGRAFPf%2BaEx3WYF4ZCrcA5WcRpu8JE3%2Bjjbeewfd2KPMMiYcdgkNofnmAHwU1QrW1j6fSAvKEWOP%2FiIjY5VyK1KbjVEjqPpempz08kQ7Y8Fe9qwhkLu2S0cJ6UI6DnKmRDmfK4tklLStBEDRlV5mI1m7arOQp6wT7G0i2XsIb9Qq3ervtRs0bqntFbJWdUQa8VSaCp1e4L3gQpjJTQWZc2213pCn8RIUn7PvPiXqPVdJ6TZ9iE8c7DP%2BNeewPm9QqZj4147NFRCwTkSZAeZ9CJVQ6hXSeVb04hHhGuLHK9YW2QzEOuqZKIK%2BbSmlFOUSbakprsKr8CNqZVh6EhIlr7tSIMQr63NEIFDChg9t5axox19b3mUxnmrxLMNpIyBE8XtlsVcV7PiEq1s4TjfVY0WA94K87hUwBkd46Sjal4qQ%2FEYYCEPbalupYkRDw9gCmVMSega1ulNET2tAKWjNZvvUeim%2F6mCvDqwuJxpeQC6j9RIJsd13kgGuB5XpsyYZUPVlAk%2FMmQZtf0%2F8belZxDZwT%2FjVwUe0gPgqVV4HHbpZAp7ALmWhnn8rRTBk%2B9%2FMFVBviOztaA9a8npTqeEzc5go5%2FnVCdIyKYfwo4hjduvEP8TGmwFg80hjq6dj%2B2bbAWSpQM%2BtJAWjRg6WMNe1gr0GOqUBxCb2f5ZDcIeRBlveiEfHsZ4xrXTUny1GqgfojuxVZKO1dXmcemcWd1AeAVHOh2OFxS9nmhUKvfQIjP94KocK1k0aef%2F9WHJXd9UMJzUwqYgsNk3pZbSLUdgWDKoaEoNsuqWDgvBUdSFQal8Mwec13UNs%2BjcQEoQJXvZzNhptNyAaNbFPn1G9qtcBbtSnXqgWxTjKO4nf9v%2FCLa8nSpfZulp0hlpm&X-Amz-Signature=18841b61b96cfe606a98441ed381efd983c5cc84bfe1aa667fd581f4b78becc2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
