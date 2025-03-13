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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLM5XXI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn7wPE1KPBMYl0yiwXwwVJuPmZba0OWsxEXECjP4muHAiEArw4ZF1EeS93Z00otlxPHZZ%2BMWEYN4RJT%2BGUC%2Fm8YK%2BwqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1LxHzVtJrGOaSN5yrcAwAymIEm37oLr2vhLwYmiq4XKbf8j3G5mwXJYqZhQTyyy2Aaw7Y6LCI17wYk6LalVt9roSNPRsm5nAlfCTNSalyBeh4Fo5hoi2YmB7M6ouHEMFabdH%2FDxQ0srraSEUuLA4HmJrFxfPQTJnHMWYl0lGP6JURj6bdGu8bJYSd0ZBG1tCXeHB0xnYy27Gf1JbSzDwGZvasG1npPrRbUvBO%2FqKD54Ijqs5JjqWij0MRT955oWY20SGyLjLGa8uWMB2FZKW6J77frBOlOZ6lVvsotZjAf3K37vLev4fjo0mudSil6z6pXWOXdaZ2iR6MBcBlsA6%2FaEO651eoH4ll1oz83S5I3zGMtC120bbBkA%2FWdj%2B0sDIzyaalU%2FKDWSBoWUGrRNX%2Bf0She3M38U%2FugXKF3SZFl04wLaHbBhttWTdPIg91XOCv7G2S1BlSVDAxUqvRSVVwaSFAaOF4PejtuxQpWc08Ldacr%2FiBxiVHOuQQtp%2FQNYV4qxwWMP7WvsWWJfOev0k%2B2RfKWCHqgAhVvZjtQyz%2FKX2onnzkNzzwY6wM1SkZpI6nLB6YRkVZQBp5oY%2BnHN%2F0iQLopusslYu2vYV6kGp6uNCliE%2B47tDiJDyThSm%2FDTPpZdV5GbAc8bw9JMI73y74GOqUBaiPjW97ccRek6EJiq3asTTTXV9BLdDAjpOAz4rdH2dJAx9ixaUnSQJKEQZLd8awA1n%2BaCYHX6%2FdA92nHyGelyD6gtyc5YsHDZYGlGVUNtRilvl%2Bf5wGnYuMZ8tlQpJ8vNfGg%2FZbcytCSwPNTK1Qh%2FELuG%2BMDjP7rbCqLWb5dD4X%2Blk%2FFlTZ8c6xm1tbPkaqLrbM8FIAOHFwzOYxPWqN6j%2B%2B%2F661Y&X-Amz-Signature=1460f5342a15fdcba3e9619eb7260cfda6b2a0a937b823f21e4df53b9051e47d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
