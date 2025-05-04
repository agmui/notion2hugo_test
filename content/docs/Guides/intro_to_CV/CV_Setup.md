---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665PSQKTP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDe9wOX1TZtFvynJojIva6bkN8QEpwmGkg96CaCf0DZ6AiEAmC94yf58Rhh3f65yQt6SBfT%2Bzq%2Fd4IIzt3txjUvPsBMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIYUnTind%2FVluEEvzCrcA9sFlmQnqwBE2IkjA7T4zRwUQTmF60DuRAnNl7nt96s9aM5kiF6DwnX%2BlkG%2B5LjESEPDjZH5twEHdiWl%2BGLUbmEb%2BGoqtzbMXSs%2BHlz2NCjfgNolPOVxNVpUQ7UqwNMyf1c6DWw1c8dxdxY%2B64tlx%2FzCJsJzK7S2KlPPGf7eUDxRzO1amIGBnP4E0Rk7K1hRGbo5L%2BkSnmYplRG4DTxyws%2BJw%2Bv800pqmItlJcZq298jBE%2BmN7uQarsWNNK3lGyJwd2d1QSV1%2B%2F1Xztpfx2oEvD%2FZisU5ceIUpFmLOdvV0KMC5ZxLIi82lfqiGQfZyLN6QRSNKrGTrCTKDlasAlNZzq1W3y1fYh8NhgFGXXBm4e4CdZBRan7ZXT3zJxmsKu5ZRv6l9bn6WVTppjnvY6ihIsqwEExQrf%2FBjk7sMvrjD%2FtC%2BoEG861AMxOB4mbm%2BbRDD4KXAMY%2FprZh7nJBXNWCeygZUznqlSZQ8xGeU9EszcTAuL%2BRV62AdxejZAYg9XeE5LTH5JNKvEYv6s8yrOrTk4%2B5LCjKY5VnLAgMcqeluwIATDPvRiz%2B5qjsiTh4OZ9AUmQ%2FZIfoZKcuCsiwFaCF6LIf2Hl9OJQm10%2FeEv0MsRQ%2F5pgQBwfW8rmZK6BMNjb3MAGOqUBydnZiUHQrgevXxRpIj7Jrj4C3PTfxfhQj%2FRWQVA7YuolBY8ESc4R%2FMHHfmOvwOKjvYd%2BtEwKR%2BmwpVCWe7Helur7vFwZM7KdEyZ16%2FwvKxxSsOCsgmQxe94vkVozvFW1aCMRxyyHsce3g0fUg73pupI98RQisRIJD8BUEhAfQGhUQBiwyXpRCi%2B1us7ia3OTvRMXvEG5EfuYjtTWtvgtR%2FWmy1fj&X-Amz-Signature=79c44b6a98998aef7656a3075db0310d8da57fbb31bfcc4238c23b78b8ecf65b&X-Amz-SignedHeaders=host&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYSJIKDP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD77WW4dp3ZU8FDZy8voZnztvz05wSDBgDQ09d3jSDR0gIgcOSURcatc3cv%2FCnkYqnW6fijsRERzkBTzwZekOnULuoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHmwFetUaNF3fcrYyCrcAyqPPMwhZVGkHQ%2Fjaa6hvGV4yZX5owLqK1r0rCx6CFLUbtwqsn1J9uHu2IOS%2BGOwpWo75QzeBc95k1QYPYSyJamvGKw%2FQZTGgA4quH9s5HNT4MMf025xqtk2%2FOAp0itcMtsgz0SgJhp7o7u2CRRRGAyAsEBbGDnoHQbc4y6p01ZNuvn6lT522ee4C3Frs8qRvGHjcwb%2B89X9zqC9VmC2s23eQUbse%2FYk88XOpiO1YmnaJ3hQlcbGJR2lNggnlV5gz9JAtQzf45vQ38dHwe30juQ84u7ra%2FQslKOT1Nc9WFPLuR%2FTbaRDsd2jwA264XgHZgDWg0DMh0E%2F1TEgrWxdAO0kRdo0HyJ9o8HoJM0DvF0%2B6Kz0KvTaGSdb08eWHSzWPNXyDfXQt7zxGnw%2BCMS5fONEt5kn8r5McLn5juLzdBP3OQ9FCk8nCbgYjMGX%2BZttgBll72kGZVVtbCjSA8QWXwVRVr5NN4Kcv%2BRukK8DqqFOJ769qmPXFp84uL1oqCKgD4H6hx91aSjIs4y3UT0fudTxR%2FsVIajXMiFIS3Fn2CYRSQION38e%2F5xVCoFqA2l4g1soM%2BciWyXUGwi%2F8dgrTFkblhXo4wfZl6huR7vh%2Bl2VGW%2BTNSA9XE8QUYY%2FMMuP3cAGOqUBj1e92vliQkEENB7Twg3xyGlWHV7%2ByFnEOQ8A3eDEd6Bxx%2Fm8GKvgXbTL6pNlSWvsvZqHVHhmUd1GEhp2VhCWQo6FYl2R%2BhSj5%2BBd36AWH%2F5e%2F2GqvjZAOBxmheghybwkgj2p5PRYtvLXnXvp2n7pzSs5B%2B6z99i93WAuD48w3gkxwX9ZDiHLsDorLXVzSgADTdYZXHt%2BxZ%2F6U7w5AvtdVMTRqsu4&X-Amz-Signature=83fb0f9048fc2ee5bc9c620e860a61eb4bd82720846b74bb9152226e75ce9545&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
