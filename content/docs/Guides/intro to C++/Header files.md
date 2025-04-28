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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAGT2AW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyt6P0FdcMLFXFomYs%2FLobUVQ1YxQR%2Bn45bDMTvwJ8cAIgc7784OaA9yTaedbCB5F9nkOFo57kavXPON1nXZlY43wq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEd4iXfFsbr9%2B1ZYMircA%2B0CUNuaxjTnFQQfNnRtnXQaN9G5HMKrJGNkDT5VW6EtOaydeQRy6Gthe5aZhQIebd0IV745zKPKKgbeAu1bqyaPz8TKxGgrbjV0zHNBbZnki%2FApic6JFaOhNjASFNujCyeKgSopu1KYiUDq4X3KBOFrPNSm9ImalXy%2BUi3gPYBS2NiqK6NYiAUwdrVK0%2BBXfTilmP4szLAUPY1ISqGBAXMxCu2x%2Blbjpd6sGfiopatcUC%2FI3a04tLRa2dfKh7d%2FlysxuvrlgYOUuIZNW%2FY9dV7WfaoO8DdKqasuvXsTWc7G2PPl4Voryoui%2BMWrIPu9fby2nOnNfoKy3N%2FJAph1WjdB%2Fq%2BuTfVXQfRFSrfbNlGHFmYaV7B%2FC6Vy5qo1hdC%2Fu1HFcZpTRe5wzokGFIo5KI1t8970i7L8nUpqESwsfpSK%2FCUSfuTdtsIgp1M22GGvfCXobu%2B9fiIYXsACgCd62V6zPoLvT7bW5UwhbS33WBi0kAxu8T9lAb3RKrAj6NZk4QtwZLUxSOHcIn%2F6MeTHpGIWDDJM51RpynFUdTkf08Druy2NP4Z0OvgCUMlgJc%2BTCKay%2B0VWWk%2F1DtWzJ2fts5vGDBaBO7M6kHrEs1vNdOjd%2FKDR%2FZPRAPBA1IZYMPnsv8AGOqUBPw6tuPCbg6nIfP1YNZ%2FHHtYrv5lyvqsjjCnuVxlJn6V%2FUgH8FWi%2FfVbQPWN%2FDC6wYo4LL7USmfPLdvZIfik8OQv4Hnn7d2AEKslrW1EyMrZxTlClB8e0qntyWA64ur4dgiHX2Tb3mZUxEb5%2B0a0WG8Kajd2AROInXW8qse%2BLqcPGlA%2BJpnNbpxxFt2SeV%2BaJwnJ72BM1sP6SdeVNEZ1hk5V1BAbh&X-Amz-Signature=860bdb792e69f124539e4181471c112a0353439e52848225354b1a39b86af68f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
