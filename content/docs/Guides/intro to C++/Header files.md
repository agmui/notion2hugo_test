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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNM3AHUF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCynvoTnNtu3hFoLHPOGBsvNTMBZErTOoLz%2BdmpIAmx1wIgPW9Vpm0ukDn95erfeqKb4qL7RrjPeeskQBD1kQS445MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8iBzRGwn81b00cvSrcA7qn7jGiIdApNgXabBLZIUEaM7%2BtF5D92VC6pzyFonfOMlHDZUdx8WhF8aYkdrwxuv5k8Nzy4nPOhx2MEW3TVjYwX4GvIFhWYbY2rx4A8%2F%2FxuvFNnVcWznE9RO%2BqVK2vWZ3ybWATffxXd40JLizWOOdRQ%2FXmkymiIZ4z%2FkvpRuVV5nkPiC%2FUSgpe5tHgFVm%2FNF7e%2Fe1%2Bto%2BA7cjxmTa5JeW7H9zxweE5q69ugWL5WIltjzk%2BgX9th5UMOouWeBQMGm5%2FLprf0KCCWVyEObj897sokOCLluYNoH4XzTml3PhKFdsA64JHpyz07gXQB0e6OSvRLT%2B8%2F9jIbUdqZ1lsiiwmp39UUKJ5j6HFynRHb3C4Zx1O2z2MayYOA3Fk02l%2FtBD0%2BEOHDPwUVXKMsByY8XITubQfg29P2NVrEqQlXJgwv40pWywN2nbfe3S1mjmxvB3Fl7PGtnet6PDhremflfw3EF7s3UjQ4xR2TGUueviNH1zRXMIywXZnOpqo6Bo13d%2FrwnCoxhHrgK2MbS%2FHSyRzrb%2BKraHeexIjWjIOPgzwRuRq1buwSJCRNNrZGc7P4dyhrCHyimFlRmTEI0RQ%2BSCcWwFKwhi0bqloSYEK5opsBLCR1A1QaVFukVGSMJadk8IGOqUBpvZcjVnFavKhPec9gZhjPbFehkDEzMJLSvp9Fm0zB4f98JbeJyRobU9oYnslWZ6ovJzOU5mrABVl0lkyqZpKYZddTIQfQZGz8QJm6QVTTTMawXzccgGKrkY2uCAKyWpHrgXd7HAilgvD9ZCKV61PiG19pD7ka2V4ooM50Ii7WElm0iM40YURvftE%2FppoUMxZcNyYOwPSVEw4vaMRh5f5QO%2B9mPwp&X-Amz-Signature=21d5b3ec15b31ec27454c6b638c31b21757e831923acb67ac60cdea0202bf99a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
