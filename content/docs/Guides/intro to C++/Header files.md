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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UO5ONN2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJID%2Fa5Dl6bbhHx%2BMtWu0%2FJxuB10YtuRqVlZjAOgHLFAIgWg7f4EiwStYVnFD6eRrtcyuM7FFnSFCWbdkCw635ogsq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDO%2B9mf9f%2FxFO9CKa%2FircA1WqIyFJpWkHJzNTc7YFtMp67swzVQoZ2pHKh6bt6532WHiqqDe8HUAorCJJTJebMqq7etQZnenP3J7pKPEv%2B%2FUONo0i1L5PDTRe5m9ybmVCUJKe0HdOn45Ldn3FTE78SyStOCVe7WEQeKmG7FQ0N2i%2BQ1f8ula7DdSoRgsBKLP544CI39fohwA%2FBbAIQdty31LaDmsMULm6YTzwdo81B2GaxGWRI6wFXN97fBEePDon6RSrK2rUe2Nd61OyuLn3063XOKYnEiNqWWrWhhWEP2uTtnNZDuzGwtgEL4veqDY0%2Bhw00xqFWBDkeY1V6Afy%2BdWln%2BMUuYkQMYchwvv9wxKfLQCuQVCovbdf9T94uCpGykI8e%2B0YP5HpMb%2Fk%2FkSsunj%2FUNC6eN1mJJKrbGmKbjU7pnJdi3G%2FJPweZHeAK7yOZbGhWctdP8k55BEMADhPOIBzRwrrwElunuQNaNZrogNumJFPSi4cGbmtZ4vNQpP%2BOxAgdsjMIdiXKB90B9m21I%2FgGAgQRwe6oTzC3bHdM5ids2keMqpyGjrlp79nMOPDkcT8fU7C%2BYyo5BbgVbgSBKChg3kI49GTt9tToAhVj%2Fl%2F5xEX2wGSXvBKs%2F5as004RmVWvLXJvTl3%2FzGjMJfq670GOqUB3UtHxPRatyPg0IhoUqRRSBwaoUBhIAqcRSMBAKuDy5GoJ4uB%2BknSb9zHAg4lUafp7E%2BcwJRuNOU8Bd1MSO7pDa8qaqibcPxJZ9A%2FvaLentFRQnYh9UatqHSMeRrWOn2hS1X8w0%2BqUHK9h9HqTlhtDanVzg0gm7UsZxrGL12sLNoCOQl%2FCRO6vewsQ3ArP25K2yDebnyrC0%2BJNgOAixwFeOQkzCiN&X-Amz-Signature=95f92060e5416133707e0bbf6747c1fc1ec3096d2f01c74547423fe24e18914e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
