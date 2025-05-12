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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U3DJIJ2%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDrMobsUa0%2BkYZwjIPFvtVBKoy6qC0qp80UO1CksvRsWwIgGfyLFczAgaKB4BggI0AApfUOWT7SQOhqKWkIUFCrwwUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaEOSeR0YP5oSViYircA0Bs29wru3qKMGofIzJ%2Bvpvf6bpRMP%2B1JWKzfhgGKFgoHKvMG96RCv%2FrOMeb6FOgU7dCGB6Ftv8s2%2F3CXS1jxovyMfZPTyPGDjw8SVb9o9hNIMBjbxm1ZpJpA78e%2FNO%2BlO9T6IPanTGbSpar9n6UV48HbtcymeOJe8DxWV0miv0DXa80xKvUqZicO1TtkswHgFmbrQNPL%2F2eSAHlWscsJha2GymkaPlNcD45MuJS1EwQVCIM38KTR9xrgrlc5lwKCdKQNGvTj2MiWAkUl2XAcN%2Fps1UiiSs%2Bvn13zMHBJhiTiTNyIQ5GUzM2HXkDKL6oAXYOs%2FZ8L9%2B2DllMBgm5y3dayFLKCMFALcUkO13cO5Wo7NTDVg%2FCjp33l%2FAPaQuPjEr89gON1tNxUngIMdfAbnTFLJcVbF8NPGf%2F%2BqJXs6wB6kj5sWZnzhWwo5KlNyz0YvxwwbggNyvKe70B1BYdnOxFo0DRUBTYzzCDcYfmYMkUC%2FTHBeb4174%2FIMMvIFhhi87gzwgriRbCEUnWh4pprXa%2BQXqcVvwme3zalKx%2FHsNvsDkwK5Js1Y7B3XrRQiq7GxKju5pMLIcotI5PwtooFTnNHJSZV1X%2FpCFCDdKBRooS5GTKN5hiFFYaAnRCMM6mh8EGOqUBKxk%2FsSOMIFBH5ZGm45hsVFlLcbgu7aurFf1BQMmacayATSFSNH%2F0c%2BeSm1CydWLm5WH0AckdgeNqwt42JXR7Kfuu1QA51%2FfNYplDQ1IYi5hcDtAL5rtticbKjoOGYMuoiZeR7vmqFVQpqCm8dtKPadtSA7fDFzRFp4eYPUWFLcu2izEJyRxLrb8jGH2A49Vfv7KiYnOM1JF2ZXgIlzqPIDLJ84ee&X-Amz-Signature=d98acff237c0a5af5f98bc6a38ca1e2a8abb955a885c403753f6e9ae45e2fdf4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
