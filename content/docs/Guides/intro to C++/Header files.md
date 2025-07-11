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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662N2UJAF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzynGEfOpJNzkUADI3DrpeATCjDl%2Bxb1bLjZ0fbV6psAiBVko2ct8wVd97DSa%2FWCZ1%2BBkQXZVLsKqEZFRniVvkZtSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgiJOCAIOOr5Xr0%2BKtwDsgagcShFVw%2FLV5Km6PHP98PPUeEyn1VT24CJaXceQas7F7toUCiRyTUgtQ1iTU1RStIycdDLK5ArHB8Hiv1DIHtO%2FOV5l1hTxLlk9Q7usqqdcZVcTW7b0M5QUBoLmJtkhXYryZnTj9TC2fc8nCfbbaqtVfpo6X%2BJGilaT9EXj0i9esxZOEh1%2BzCNZCp4vERhkgWWsBSoU62tXYe%2BHmAZRTfrMbLsSLdbE10Ez8TGUOdt7FHvJD8n1aGObel1MTFiaFsmAVQVAwEWfBXgw6B0swuFUSPrwwzjtWYMUWbIPU%2FKWoO1kEpgdiFq2Mdhe6qhxyVbR0QJ1OpXzTCiMM48mJxSiUBGJc2xcqY1FhQyj0wH7EbzsNjewrTKWjLOlgRV30tNDfzfX18Xlt2aYS165uU68839JpYgxNZolRWNUuLnKjLtni7%2FaOTq9IYDoJC8YVzH2VQbUbEo0CCUTpHM%2BPbCeA5LExBpyTLQOmNfQlP4d5zIlt3TDlOtnt4fQQe1FhWgBUWnGWwqAnhd3bcQwsGa7Qlu5mE68MAj9yok3TuYVpIwpsaGwJGxdeO9sZvYpqZaBefasPxqUBAsRCNSqYQjkzz%2BmCaB9H7jfWm1W5unbIUIfOu4PzIsYpwwo%2BnBwwY6pgH%2FH9Tv1YEFE482NPIWBQV8%2FrGh1S7fwTlduL0TzHgodIHcTOerxMpcczEbKZLdobrcJaBjhewxeTUxo5SpVUy2169rFm4km7jgHFiyKkGl6VrymuC4k%2BCJXUSFpOV8kgHbhfoSp%2F8XhyPyWFdjNJ3p%2F0z59xz55XFOOCJ3aSVVVvPxfkRlU6iBZtKXg2qWOyNEXD1%2FapWFP1BrSV%2Bv4IBH6gSLUL5l&X-Amz-Signature=e3b540e2e733cec0156144191dcd2e7f5d23d6657f22e18faf9f617090a61a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
