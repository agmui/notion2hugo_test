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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUXR4T6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCID6KEAKJNCrabnNslsxiRmdJJ2ErUxL%2Br43jP91gfCCAAiEAsbXE2m06j%2BhUo3ZJ%2BKZQjBRpN8CJR2WeOVNYQSmzIeYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsUvgnLKZBGL%2BlI%2FyrcA1wdm27w0sz8kDovKyKla%2FwqpqA5st4oP1xYztAKdTC4KUCX%2FqQPz7AdDAY1CATkzyLXyXzYU0NLswYqAFoyGWhUo955T9IKrgsj5ya33vpBlz%2FylwknEPuxf0MF8z98kovk1LmDxAyP4jFSh6jYpm2DgcVlSuZfNdmf7iSaQOqv2A4wDm9nnmIASgyMnbAG9ByHpgQBhu79g47BKYtftLXr4OYSV0NdRoLoxbrilP88O38xywLNGSSHSpcX%2FM1DfRt118mHx8uivC%2F7vKRJay034URBPCVqTjEWXQqT0wcPqF%2BhFKD%2BcFVuoAvGWd8UFtjjZMLY9k3L65CYQmp4%2BZx1dMopBAIsPbc5Hw%2F9eT%2B3phVPkJA3IPWWLBkJZH58A%2BApG%2BNxXd8VxcbwgX5XqEob0xjZuRehHvrBPVfrhBCMpPH7xZ%2F0N9H2xi2ULhovvzDj3NejlfByGwBFZmkvSSCVObDl6LLkj5ZZp3CNhZu%2B4Hzoq5lSwtU%2BinZC2spSqf9kuKZbNBQdvABK1Gx3jMMzCFGpfdVjM95oFUancSh3WgGkv1VQFeaUu6gm9miiLuHq681WJJb4iW%2Bg7sCzPWDj842zpW1tnWCot%2BkK7MKAGZk0AuZS1rningZPMOqv4MIGOqUB%2FY88bcvvaiUfiXXFcGy0LjcqhqrOMFkho%2FBALicA2QQTGqZH11slpbEWlFTGTdrlHAfvMEUlXvYrcHlY%2BHuT2Q60xAhtzbjy5WZZRWkf%2BFVMnLXvTKXqLcGzeaxzH8z0UriDLoq0PcM%2BeB4l4BSdLYTgKBknUhK506zGVhJ4E7wGDPkf3TEc3COQcKbdNM25srP4sBH8LCtl%2FN%2F62xttgxk6lwnP&X-Amz-Signature=b8877bbbf83b1581bb0a45075c171de1e1e9d6ea5d20338b6cc5572dff3f5a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUXR4T6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCID6KEAKJNCrabnNslsxiRmdJJ2ErUxL%2Br43jP91gfCCAAiEAsbXE2m06j%2BhUo3ZJ%2BKZQjBRpN8CJR2WeOVNYQSmzIeYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsUvgnLKZBGL%2BlI%2FyrcA1wdm27w0sz8kDovKyKla%2FwqpqA5st4oP1xYztAKdTC4KUCX%2FqQPz7AdDAY1CATkzyLXyXzYU0NLswYqAFoyGWhUo955T9IKrgsj5ya33vpBlz%2FylwknEPuxf0MF8z98kovk1LmDxAyP4jFSh6jYpm2DgcVlSuZfNdmf7iSaQOqv2A4wDm9nnmIASgyMnbAG9ByHpgQBhu79g47BKYtftLXr4OYSV0NdRoLoxbrilP88O38xywLNGSSHSpcX%2FM1DfRt118mHx8uivC%2F7vKRJay034URBPCVqTjEWXQqT0wcPqF%2BhFKD%2BcFVuoAvGWd8UFtjjZMLY9k3L65CYQmp4%2BZx1dMopBAIsPbc5Hw%2F9eT%2B3phVPkJA3IPWWLBkJZH58A%2BApG%2BNxXd8VxcbwgX5XqEob0xjZuRehHvrBPVfrhBCMpPH7xZ%2F0N9H2xi2ULhovvzDj3NejlfByGwBFZmkvSSCVObDl6LLkj5ZZp3CNhZu%2B4Hzoq5lSwtU%2BinZC2spSqf9kuKZbNBQdvABK1Gx3jMMzCFGpfdVjM95oFUancSh3WgGkv1VQFeaUu6gm9miiLuHq681WJJb4iW%2Bg7sCzPWDj842zpW1tnWCot%2BkK7MKAGZk0AuZS1rningZPMOqv4MIGOqUB%2FY88bcvvaiUfiXXFcGy0LjcqhqrOMFkho%2FBALicA2QQTGqZH11slpbEWlFTGTdrlHAfvMEUlXvYrcHlY%2BHuT2Q60xAhtzbjy5WZZRWkf%2BFVMnLXvTKXqLcGzeaxzH8z0UriDLoq0PcM%2BeB4l4BSdLYTgKBknUhK506zGVhJ4E7wGDPkf3TEc3COQcKbdNM25srP4sBH8LCtl%2FN%2F62xttgxk6lwnP&X-Amz-Signature=5171c39b500b6a60be2a039a06b7e16e7b306e71c7420552f2f3705d6304fcf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
