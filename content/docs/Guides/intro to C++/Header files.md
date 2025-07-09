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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AGDFFE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe18sVl2H4FSCMENafcOUQwRdUzgM6W5kh3kTE90IwrAiAJ%2B20%2Be6fmkIg3jizWKHR8vSgXjdDug4M0HepQKmQkcyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAEle3XJCOodEp6h3KtwDpnCt%2BUtQti3ZF1WpLHDblUqiz4o6MWP4alTEmLp1keaCbwTQQillobscopH%2FhXEjK0ASKmq7WINWhZONfftnsW3syVuhULguzadxfQ%2FbA0dQbQTRUj%2FzAdW6VS7zRhWMZPQOM%2BqiQx525wSJFfgFMpfbrQpVjqsiimf8n3NgXhayypHGPhBPNniSLxkpbAZsGfPPG7450GQVNf%2FYMKYEvhRd5rC6%2B2qgFEj5EC%2F1dU4U1EMNqRuU3JHlwOFLgFN0Jxx0yC%2F0b5ki0uDnpyGTkhbC5wCC5C8IUbWip0HjQAov31meP1qCq%2FuGOAmOeiruEYlbprEKwFr%2BLnnkTruHG0%2BkRihPzA%2FtjFzTkBXla66hl0X2A4nSawxg8S6eXmjsVLCrgGDFRgWeTesjq2WEpwOB6cAQWeVdWsMdQCnj%2Bj837l6D%2F6ixUZlh0sZK2KrjOUhHD7yhw7u4IibrmKSryUazay0lgBJ7tUYj1viknz6NoVQ5ywGEomCf1UFsswJWXBZ2BMxfxUYAAPAXJG2B3QImF01qCo8ZndKKXWTsldX7glbHQFTp75TCL%2BieYfFY4FoqB4Qv52z%2BCWixOelVU8q1hOD5PIp59zwSBBqKofaPRwPrYkJuIHl%2FWs8w4sS7wwY6pgHMckhgl81w%2B5H5GQkriJh7Ib6pYwnbvFoUaMcQtNASSXofw2TAEmWQtDS7cvmu2p93%2FcUNHoXwVrXi5rL0QCwXtR7AHOZzKjseeQ19zJJCd7MX4sd5eoFXbnEs5E9Yq5ssXzM5lGOVnqP3908HPtUX4ya39DgvwLNYpHIKj3V0FqY1t8h3%2BWvnk9Y098hFKCNwFnytv5i5bcfdjGoRwAtsYKvfHH7y&X-Amz-Signature=44c151f17944b2085c37cb35719dae2400fd042a7c0c908d8bd10aab8a4b8582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
