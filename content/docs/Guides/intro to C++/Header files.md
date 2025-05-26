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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTKPF6DW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCVQBghxAGNriJsZOrlu7b7NoLJvMa35IyteYZPEPkA4wIhAKgLDaryxRe23eagTabK78r30U1crqLh6yxKnBJVe6xYKv8DCDsQABoMNjM3NDIzMTgzODA1Igz%2BMfxwR10OCFtcNNkq3AOv0AZjUQPytY8fxlw%2BJnz2KkEFt7fEY4QzNDbHpZKUJVoFfwcl8yAc8RdJ%2FSuN1T5xxSSNUq84PsMnmssAOHMwcmVpZaP037O92VY3t7MkVwLCLliXDxQwzBtwVwT%2FwBStOYeAiAPC%2BVuBTas%2B%2FTG9VhnMRl6vCHOpGbx95ckl6lHg1Dxhix77Uu1dmPj9LZ9fsJeYS7Vuc%2B1S1NhyignKA4px7GmviXl991SB27gvdkUT8QEPOdOfqHuJncFWqmcfzeqCIJkKxlZTdJrEF712ThItuN4APrKVtBwTez0FmvLlJIZcRXQmZN6s0ogXNOtSFLajosMW1UAOz1XCsTf7ErB3LinSOIovBpHBliPqJaEEEtCF2sAp1DGXU59%2BHENBQNZdopmUyWdMGxLZhWMdAzfJqo50ut2GvKqiVld2BLUU5I9gUd9O08pnrD9%2FqFT634gUfPLCJ5V13heKY%2FffCRJMEhxHpnUNfBBysB%2ByvB8TyU15ExwIe7wknSW7wOlo4abbXinWT8ZkOaSAd81iP221m2%2B%2B%2B6PnqxoNa%2BNIdGTPWN4qbIxHjR2pBcRIyn0QtHX77Q9JFThlDtW55AIQMSfbbPlzwExJ%2F%2BmLRUASaYdLyMz4qic0Ox38ezDvnc%2FBBjqkAc%2B9yl2fVXuBAPA74rP6wbmzIiMrvOj21piAoLhJb1%2FJRV29U1yAa9EqQuwAsn41GacY3Ko59cMQ0CsHLq5ebz7MQ7oPzRsmYdGjCe3ztIfxP0%2FumD3pYf4DOZOwYzFj0onzY9TZIySOeh9ahPznapWHhXoj6OqPHGnajynE0xWCvXy%2Fif5ZhYTvAJcHzelSVZ7avdWF9RgCAZx2SblobImdq05G&X-Amz-Signature=1afc78d3287292daa47208603323c1199ccb2eb3cfd7be64cbf6d56cccf9038b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
