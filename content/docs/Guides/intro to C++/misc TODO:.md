---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZHQZLN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCICYDF8mWMSAk528y4xsRNka%2FrEHYY1XD%2F3HZ9THv%2BaUdAiAlMsRVdPOrZwiAXrpDZ4fPqr%2BIWQt7C8EmFzosqGuaCyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM0nbvjMciP1QHoikZKtwD%2B3SOo%2Bt9TFQe727Fcg0uKW52i3PCqlYda3c0%2FKqF9xhDMVcw%2Bu9y5%2FLYVPAB9ddhOQRQgAi%2FfLfDpLQmzdVTZFir%2BrYd4sRZKUyV21KDwWVA00AYU07QH7QM0e7c0bD1OlI3KO2zsDEF5TDO1yUoWOC9jvrNqsvp84jqep9KNdsh3Ii5deiJHBlzbiOsz5v5hmmqEBKBlZbGJJiDLCPUJsYQXM%2FrY%2FWmLpM1ijTsemJa4OCVDJ1NYntTZBiCiRVsjoEpnOlXrI4Ra%2BOp0y2wCYFuPcr9LY7ZlwEDK9LkWLVk%2FUdESTKTTkYGa4H1Sm5%2Bk4SMNjBxNpawlimDpjBrKNVDXXAnHEKjGO%2F2rEI2bCdUeEDLpsezxboR0qpvZHN%2Bl0Nj74clDurKUZ69ouE3LBhh5OUc%2FFMOdxJmZgzEYAWwjD7GfLzxub0zIDVViYzc%2Bgi8uup6Ve2Eqa780n0%2By6KihVUHUeeajsjO9%2FWsbS3iuuonWLC1I3enwGrnXt5dxmD%2BDR9kSphfb06IlTFrjV9B7tRPU14IB%2FAIvu%2FtxFD8M74mvxzqlaGVhFKxZuRg8oBkVdsS0RS%2F%2F0HaTd04UnFexT6plSMT3T6RzdBuacZjpqDIbzPFwcHR5MAwt9r9xAY6pgGyP%2BAQlkSXzgjcEzY6ImYOFOEog%2FW1%2FFKGmvdInqHeg5iuZhy%2BdNlCq8ksBi8jQxs%2BEq7B%2BT3ulB2BVUQWqMlykNOehtqND853kCrNnfxtaZ4AFnk%2BngV4JLHOtqELDLjsnmohsOA90h3dMBHIY22VzbkBkTL4ViVa1GIgKgmX62rQNM1TNS90JKBrHvA89tB6QqvHm8JPb3PIdrnZP1Xf75SozoTt&X-Amz-Signature=f2dd42d32cb821713204dc52e1a0e2e380a3b1da6492b62cfe08e558f302e756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZHQZLN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCICYDF8mWMSAk528y4xsRNka%2FrEHYY1XD%2F3HZ9THv%2BaUdAiAlMsRVdPOrZwiAXrpDZ4fPqr%2BIWQt7C8EmFzosqGuaCyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM0nbvjMciP1QHoikZKtwD%2B3SOo%2Bt9TFQe727Fcg0uKW52i3PCqlYda3c0%2FKqF9xhDMVcw%2Bu9y5%2FLYVPAB9ddhOQRQgAi%2FfLfDpLQmzdVTZFir%2BrYd4sRZKUyV21KDwWVA00AYU07QH7QM0e7c0bD1OlI3KO2zsDEF5TDO1yUoWOC9jvrNqsvp84jqep9KNdsh3Ii5deiJHBlzbiOsz5v5hmmqEBKBlZbGJJiDLCPUJsYQXM%2FrY%2FWmLpM1ijTsemJa4OCVDJ1NYntTZBiCiRVsjoEpnOlXrI4Ra%2BOp0y2wCYFuPcr9LY7ZlwEDK9LkWLVk%2FUdESTKTTkYGa4H1Sm5%2Bk4SMNjBxNpawlimDpjBrKNVDXXAnHEKjGO%2F2rEI2bCdUeEDLpsezxboR0qpvZHN%2Bl0Nj74clDurKUZ69ouE3LBhh5OUc%2FFMOdxJmZgzEYAWwjD7GfLzxub0zIDVViYzc%2Bgi8uup6Ve2Eqa780n0%2By6KihVUHUeeajsjO9%2FWsbS3iuuonWLC1I3enwGrnXt5dxmD%2BDR9kSphfb06IlTFrjV9B7tRPU14IB%2FAIvu%2FtxFD8M74mvxzqlaGVhFKxZuRg8oBkVdsS0RS%2F%2F0HaTd04UnFexT6plSMT3T6RzdBuacZjpqDIbzPFwcHR5MAwt9r9xAY6pgGyP%2BAQlkSXzgjcEzY6ImYOFOEog%2FW1%2FFKGmvdInqHeg5iuZhy%2BdNlCq8ksBi8jQxs%2BEq7B%2BT3ulB2BVUQWqMlykNOehtqND853kCrNnfxtaZ4AFnk%2BngV4JLHOtqELDLjsnmohsOA90h3dMBHIY22VzbkBkTL4ViVa1GIgKgmX62rQNM1TNS90JKBrHvA89tB6QqvHm8JPb3PIdrnZP1Xf75SozoTt&X-Amz-Signature=2eab64d8df36416dd3cf750154fffb14f2f2036dda1ec8ff4cf4ff1d1322dac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
