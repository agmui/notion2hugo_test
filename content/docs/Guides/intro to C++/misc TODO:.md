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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLRU77OD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1Ec8my3BbEwnXlEpKbQXsXrLI1VL8JsZMTLOfk3DSNAIgB7p3gDvCb6K2JYWgH22%2FYpHRijKcBjU9KbCwCKMIPa4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNjnH4IzBDOu%2Fb47yrcA01B8hJt0TC1VDsyGnEvQVaq6rLYp%2Bfb3fGBeDtiJoDwSsFiMeJvTS1igWIHs0IfidZqNakgQi9wZ2OROeICi6YLS7crXj59w07asyLozyuc0SlJLEgjJDXs%2F4%2BqALpbrE0aEidnNq0RSgso3LBKDM%2BeJgOwT1vFm%2F6VRHsbu1VzdRox6rKdmXu0Y9PEO15KZxt0%2Fxh607GdC781NwnWn%2Bhr2i2q6vOKyABx4EsGbACH4p4K%2F4j8DPv8o44jzcBPurYMWGzmfruwFhzCKUP9xpBvJ3743Q%2BM4qLNuzQHooZIUwyaPANaPD%2BlHc2MAZPpcMHV8wrkQvhkUZl2NLIgvn4I16NjKEDfCL7Hw0ssdQ6aCaUvQB%2Fw3Xyt54aptMyV90T3PI%2BnoNJ7zdp4%2F%2BCG6kM9izObxcJDw%2FFjz3Xz5VVnRS9NncnKmLaIPA3O4RqsOdg0vJZzhjBZhayjRwLpqfuSaEvPGFLlU3VX16HMONWcKu3w0LemlHLieJcdKelbRvW9u4dLJVRTkZYI5HZG6c%2FwVjghLZlv28pirbpU5g6pUpKh9IhpeATNqrxS9jeM5FH5Vp0owID5FImf4iDi0ziM0jtHzSGPiENCA%2F2IpgAT4jil595FYySHbwNFMM%2BcmsIGOqUB9zu9n5VMxUwcC12FDwCtmG%2F6HF7Bfl8GF4DeZEGoiOe3HeiDzEcj8%2BFZyV5s9grg1r5Nin2hEBAZChb%2BIhQSzehfeNpaUnyqNM4DAlz%2BLIahv%2BVt2C%2FR9ddta4edxWLWW%2FjVHHc7U91tp%2FHmeSpnVhSX93aPrKk%2ForQLem3WAINM%2FTngTX8ZuP3EFbwfD7vTBwX0XIWpfSH%2FQnv6%2Bv1L95HPIbqs&X-Amz-Signature=d782bf392944be23f91b857cafee196221a1c89bf745000030f0a6bf5feab17e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLRU77OD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1Ec8my3BbEwnXlEpKbQXsXrLI1VL8JsZMTLOfk3DSNAIgB7p3gDvCb6K2JYWgH22%2FYpHRijKcBjU9KbCwCKMIPa4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNjnH4IzBDOu%2Fb47yrcA01B8hJt0TC1VDsyGnEvQVaq6rLYp%2Bfb3fGBeDtiJoDwSsFiMeJvTS1igWIHs0IfidZqNakgQi9wZ2OROeICi6YLS7crXj59w07asyLozyuc0SlJLEgjJDXs%2F4%2BqALpbrE0aEidnNq0RSgso3LBKDM%2BeJgOwT1vFm%2F6VRHsbu1VzdRox6rKdmXu0Y9PEO15KZxt0%2Fxh607GdC781NwnWn%2Bhr2i2q6vOKyABx4EsGbACH4p4K%2F4j8DPv8o44jzcBPurYMWGzmfruwFhzCKUP9xpBvJ3743Q%2BM4qLNuzQHooZIUwyaPANaPD%2BlHc2MAZPpcMHV8wrkQvhkUZl2NLIgvn4I16NjKEDfCL7Hw0ssdQ6aCaUvQB%2Fw3Xyt54aptMyV90T3PI%2BnoNJ7zdp4%2F%2BCG6kM9izObxcJDw%2FFjz3Xz5VVnRS9NncnKmLaIPA3O4RqsOdg0vJZzhjBZhayjRwLpqfuSaEvPGFLlU3VX16HMONWcKu3w0LemlHLieJcdKelbRvW9u4dLJVRTkZYI5HZG6c%2FwVjghLZlv28pirbpU5g6pUpKh9IhpeATNqrxS9jeM5FH5Vp0owID5FImf4iDi0ziM0jtHzSGPiENCA%2F2IpgAT4jil595FYySHbwNFMM%2BcmsIGOqUB9zu9n5VMxUwcC12FDwCtmG%2F6HF7Bfl8GF4DeZEGoiOe3HeiDzEcj8%2BFZyV5s9grg1r5Nin2hEBAZChb%2BIhQSzehfeNpaUnyqNM4DAlz%2BLIahv%2BVt2C%2FR9ddta4edxWLWW%2FjVHHc7U91tp%2FHmeSpnVhSX93aPrKk%2ForQLem3WAINM%2FTngTX8ZuP3EFbwfD7vTBwX0XIWpfSH%2FQnv6%2Bv1L95HPIbqs&X-Amz-Signature=503fb386fed892c9ca5567da3ab35dd1ea3081c274306a7f73e9631ec0d9ecab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
