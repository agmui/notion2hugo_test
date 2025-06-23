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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGYB6LQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCyCVA50bzBGNO0JuEXotRvO0RSOTh6vN5Ob4fzrLeSAgIgbSqmClZFuZXrcRTmlyRbnbjFldzD53L3fxQOZI6iIHAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDNv8HUFnN6vrhqILRircAwRkrd6jVaLJnkCVcJC4JkV5RqUcXiaxS5aJDWzPRSBD7ivHFhd5iw4WYuH7UkFyk3rReZwr13xdGYiXdToVx5ypMPTTiQLUJg3AoQvkGiuKoakL5LTeDWF8B0dPfHW2pTmWOB%2Fa1XqW7WLtS0dLgAU9tuQp0v2v81t7GdJ8Ca6%2BMMt%2BFEsZtWBb8ZDGVZzUTm3d8WmeykmuMWmmTDaV7%2FCbTnKzfqD0iOL1Pt0iI9gEky6UUi%2FjBWfMjhaX3wO7ZCebtO%2FP8ja2%2FkYAYCu6A7Ippe869lULxgvBkegqjgCgHlEH6NTxg9mR5V1xSWjCpP9FgoBuFvOLvsjcoyxt3cQMdNxFIvSPQFnTc29h1nCTJVwvwrGcnIq3aQLynx40jQEdbhr9m8iZIQ%2BHLc1ACB1Obgr4%2FHYlRVCWjf%2FS7a14LVtsb8lLy9ofaodfduBi2IBHhJhnzVo6o9JEryDrUdUR9VqAXR0gPkO3l%2FDf5wsi0c0ZYIjYLwwcqNbel1lkRsXVB5PprhT7%2FBKkvIx9fBGf8AQhPloOpfPkqeQtQvc%2Bk%2FfHHmMm7ri3xZdRBtrELSbXJOYnbK22bueYJvllEcZxMw0JyvKEsBOGT%2FEXRNVsT4Qm54f3KuftaA7pMJ3t5sIGOqUBgbbzmHuom4NrbthB4BOCqQNaWyQ1pMQ%2FltM7245LrH1H1CowttVmXGqc7h7vIwOm%2FGrTs9SbWXG%2F1CcxwKv12QXHd3tzYuKfLg7CydSTzyXDBcUudmAun%2BUaVyb1cz2WQerD9qPvWU7x3ypR9I57%2FPFihhFPhBP9MM7RLB7ulEdpt3%2BhI7Zv9OiI9rCYJjs%2BJZIpUcVN8rnfG7OBLJluFwLqkht%2B&X-Amz-Signature=737fe8ce7a0bd48e73375a3989b68abda7c36870ee45c303c706d7a95eefcc5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
