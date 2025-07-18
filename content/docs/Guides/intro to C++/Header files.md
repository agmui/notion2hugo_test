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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47QXQYA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIHQqnE2oJg7ljcBOKivqPaFPsEdMeDxvRn8dYtXq363jAiEA7w82wyTnMiQPg%2FjFTL6WKYcoTS5vvzOW%2FiVE0vimQTcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOCJQeaWWRagtI1WSrcA6q6KLmphWBsT0ePRVGExiCAeO1545qg5EnOVJ2sLZfElMvRSDcRx5ygmJWLr1PIO0CLwUCzvGIjlBGjFgAYUE90LPqV8qYPLCVvSe3%2B7CEfV7KrWBy1NKMkcDyk8Z%2FdjcWMUFKPzM51NOU1vq%2B5zPaSEfdyVb%2F3nv3yjs3AtCUWY1xyvG6ejtGorXFTS1jdJI2dghlL4v%2B2lrlUG4012GyXcqvc%2By1y%2FUaCUSeYSio5jIrWawUqy3jW1lfDW6VBRwmP7N4heTzhBefYUXSzxJUTNy06ScyRHWws2JX9R8bK2WpQOS9QTtti6vn6AQZ60rXpx4AEvXS11OKcYaSXaZaUFTXVmyPN62ZrI1jvq896rUqpZ5o4prp7250vcGI2vSB1oykhwPlhbe5v8P8aYQ27VwA%2Fyb4EwsRE9qc4CJCB%2FZqnn2Pbww2tbgSEtjojRGubRzoT%2FuImLJIoI36IbHIZgz%2Fc6ppJW%2FT85ZMTrRdjiqXEnHqOS3ohzUW1v2Zq7XvY4iT8ibRyTHppzYqCvfHnk8p7%2BsjA0XoJcNMRAQZnwcGnmJdtugAwVCO25ihwvzyFj5TpEzRD2vd%2BoNzfFcTcX6YZlOAeTicrkBtHcXdeVpptWkJ9CrmqNDWeMNb958MGOqUBsPKnLiLBk4%2FZA3ijQC%2FMlWWfCDxiUCIVB1CaOeLOH94WVpA5hS88EVI9K6pd%2FJVBxpQb8XAJ52J5XaEASHjXDGOJpBbYKNnS2JcNC1QZDidUgjhgHRzRBrrpL9lTBu3tDMCYz7Xlv6stRD2tTNzb5njZggp0jT5sPvlrXr%2BKaOf5n3vSrs49%2F5ynF76XNbcUnNv2qQVZt8D1AYMicC%2FvD17htgXP&X-Amz-Signature=739ffa828f0965bc7726fdc700633e905a019e3c3af9a58dd5f0fac62dd89aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
