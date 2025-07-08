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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB22LBTH%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDHfEdN8LCY82U30K%2FG%2FOGb5uoLiuHDJOudOx09W6h09gIgVA0YzsGcni8KfyYdswByC4pyCE4YIkNya90wcNiT44IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJclD%2B%2B6ZFbR732LvircAy08MqQzmFx3LTwTXPR117xEDHgKAQR1duerkcQSS2oJlk0ISvHEufzQVIGLcQPtfZUbfBaJXW1mPQOhx3e%2FsxUzixi%2F2DRI9a96dYBnxinzAErMn1woRSKLN5qCGAlKGSr1ZMD0k11yb6omcPDGpkQ67fz855Ex2UOgQQ8YJ4c%2B62h%2FAezTGyqFd741rIJ%2Fw%2FWnPn5M8RPpiGzpyNxa%2FpPiz34uzZHKkRBgCTzb7DdH%2F6PgCP6OwIvEQCtMpiRrQAqj9ussBQlzbC6I3aWKPTEQPyfL1QX0C49p9%2FKbymvl3Y%2BQJq%2BTdDpWyBLg1q3%2BksItzoD6ITZ34icCHa4Y%2Fq3wXWiPau6CVV3a0vo5HgdaJytj8kjHFhDQwAdsPj0R8B%2BJtr994C3TdQKqid9Iz2Xj4yt3QOvrrVGoLDEOoiznG6MmtJZdf83vww%2BG0dGSwXHpZ7a0PsIuZP1ffEjs5imv1cvjrA2VbnKBNgRS2HAdi8hP1x5wBa%2BelEFcjvqNeM4%2FHdzZ06mgVzu8J%2BDlvDg%2BmvMEK2FFfkkcPH72MOAp%2BKBRVh8OrhulmPbp%2BkRPy7zzuqxO0SMZfbq5pjv92U2MN9Byvn3nUp8j2oCrNk2wmfOWt3uziMYVUlVUMLHLscMGOqUB6MoDvgl%2BdKoYgx9MDFE2JEll9mdtW1BJTGpEvb024oeW5IAsmvY%2BHYcjY8VVosuHCFZzg9VKIfnLq9UeczpXjiVUfMp5tWm5vKOR7c0onO21335WvXWcCBzbD%2BfHxB5l2AocY3cWGMCvd2ek9HcEnRXeX51dJtoKohJMi3jtyq%2Bcl9FMamECAziSh0qOHBIdKFtZSjT9oxKzDnvH0XquBAx7g%2F7T&X-Amz-Signature=7d3dfcddf9a6502734ede719c9d12e59884516db55d299d4826d76335fe202e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB22LBTH%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDHfEdN8LCY82U30K%2FG%2FOGb5uoLiuHDJOudOx09W6h09gIgVA0YzsGcni8KfyYdswByC4pyCE4YIkNya90wcNiT44IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJclD%2B%2B6ZFbR732LvircAy08MqQzmFx3LTwTXPR117xEDHgKAQR1duerkcQSS2oJlk0ISvHEufzQVIGLcQPtfZUbfBaJXW1mPQOhx3e%2FsxUzixi%2F2DRI9a96dYBnxinzAErMn1woRSKLN5qCGAlKGSr1ZMD0k11yb6omcPDGpkQ67fz855Ex2UOgQQ8YJ4c%2B62h%2FAezTGyqFd741rIJ%2Fw%2FWnPn5M8RPpiGzpyNxa%2FpPiz34uzZHKkRBgCTzb7DdH%2F6PgCP6OwIvEQCtMpiRrQAqj9ussBQlzbC6I3aWKPTEQPyfL1QX0C49p9%2FKbymvl3Y%2BQJq%2BTdDpWyBLg1q3%2BksItzoD6ITZ34icCHa4Y%2Fq3wXWiPau6CVV3a0vo5HgdaJytj8kjHFhDQwAdsPj0R8B%2BJtr994C3TdQKqid9Iz2Xj4yt3QOvrrVGoLDEOoiznG6MmtJZdf83vww%2BG0dGSwXHpZ7a0PsIuZP1ffEjs5imv1cvjrA2VbnKBNgRS2HAdi8hP1x5wBa%2BelEFcjvqNeM4%2FHdzZ06mgVzu8J%2BDlvDg%2BmvMEK2FFfkkcPH72MOAp%2BKBRVh8OrhulmPbp%2BkRPy7zzuqxO0SMZfbq5pjv92U2MN9Byvn3nUp8j2oCrNk2wmfOWt3uziMYVUlVUMLHLscMGOqUB6MoDvgl%2BdKoYgx9MDFE2JEll9mdtW1BJTGpEvb024oeW5IAsmvY%2BHYcjY8VVosuHCFZzg9VKIfnLq9UeczpXjiVUfMp5tWm5vKOR7c0onO21335WvXWcCBzbD%2BfHxB5l2AocY3cWGMCvd2ek9HcEnRXeX51dJtoKohJMi3jtyq%2Bcl9FMamECAziSh0qOHBIdKFtZSjT9oxKzDnvH0XquBAx7g%2F7T&X-Amz-Signature=89661e1e69e472c9256b2a44cdc8bb356406d2f6910e89afd4bd0fb21e4fd4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
